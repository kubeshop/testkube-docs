#!/bin/bash

OUTPUT_DIR="../docs/articles/inventory/generated/"
CP_IMAGES="cp_images.txt"
AGENT_IMAGES="agent_images.txt"

declare -A desc_map

add_image_desc() {
  local key="$1"
  local value="$2"
  desc_map["$key"]="$value"
}

get_image_name() {
  local image="$1"
  local image_name="${image%%:*}"
  echo "$image_name"
}

get_image_desc() {
  local key="$1"
  echo "${desc_map[$key]:-n/a}"
}

get_latest_helm_version() {
  local CHART_NAME=$1
  local LATEST_VERSION=$(helm search repo $CHART_NAME | awk 'NR==2 {print $2}')

  if [ -z "$LATEST_VERSION" ]; then
    echo "${CHART_NAME} version not found"
    exit 1
  else
    echo "$LATEST_VERSION"
  fi
}

fix_less_than_usage() {
  local file="$1"
  sed -i 's/<code><\([^<]*\)</<code>\&lt;\1</g' "$file"
}

get_dockerhub_image_url() {
    local image_with_tag=$1
    local architecture=${2:-amd64}
    local os=${3:-linux}

    # Check for the special quay.io image
    if [[ "$image_with_tag" =~ ^quay.io/brancz/kube-rbac-proxy: ]]; then
        echo "https://quay.io/repository/brancz/kube-rbac-proxy?tab=tags"
        return
    fi

    # Check if the image is ghcr.io/dexidp/dex
    if [[ "$image_with_tag" =~ ^ghcr.io/dexidp/dex: ]]; then
        echo "https://github.com/dexidp/dex/pkgs/container/dex"
        return
    fi

    local image_name=$(echo "$image_with_tag" | cut -d':' -f1)
    local tag=$(echo "$image_with_tag" | cut -d':' -f2)
    local namespace="library" # Default namespace if a custom one is not provided
    local repo="$image_name"

    if [[ "$image_name" == */* ]]; then
        namespace=$(echo "$image_name" | cut -d'/' -f1)
        repo=$(echo "$image_name" | cut -d'/' -f2)
    fi
    # Docker Registry API URLs
    local token_url="https://auth.docker.io/token?service=registry.docker.io&scope=repository:${namespace}/${repo}:pull"
    local registry_url="https://registry-1.docker.io/v2/${namespace}/${repo}/manifests/${tag}"

    # Fetch Bearer token
    local token_response=$(curl -s "$token_url")
    local token=$(echo "$token_response" | jq -r '.token')

    # Fetch image manifest list
    local manifest_list=$(curl -s -H "Authorization: Bearer $token" -H "Accept: application/vnd.docker.distribution.manifest.list.v2+json" "$registry_url")
    local platform_manifest_digest=$(echo "$manifest_list" | jq -r --arg arch "$architecture" --arg os "$os" '.manifests[] | select(.platform.architecture == $arch and .platform.os == $os) | .digest')

    # Construct the Hub Docker URL
    local base_url="https://hub.docker.com/layers"
    local url="${base_url}/${namespace}/${repo}/${tag}/images/${platform_manifest_digest//:/-}?context=explore"
    echo "$url"
}

generate_reports() {
    local CHART_NAME=$1
    local IMAGE_SET=$2

    INDEX_FILE="${OUTPUT_DIR}${IMAGE_SET}.md"
    VERSION=$(get_latest_helm_version "$1")
    DATE=$(date +"%d-%m-%Y")

    # Create the header for the index file
    echo ":::info" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"
    echo "Based on chart \`$(basename $CHART_NAME)\` as of version \`${VERSION}\` on ${DATE}" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"
    echo ":::" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"

    echo "| Image | Description | Vulnerability Report (\`linux/amd64\`) | Vulnerability Report (\`linux/arm64\`) | Docker Image |" >> "$INDEX_FILE"
    echo "|-------|-------------|----------------------------------------|----------------------------------------|-------------|" >> "$INDEX_FILE"

    # Loop through each image in the input file
    while IFS= read -r image; do
        # Extract image name without the registry prefix
        image_slug=$(echo "$image" | awk -F/ '{print $NF}' | tr ':' '-')

        # Fetch the image and the description metadata for the image
        image_name=$(get_image_name "$image")
        image_desc=$(get_image_desc "$image_name")

        # Fetch DockerHub URL for the image
        dockerhub_url=$(get_dockerhub_image_url "$image")

        # File names for the vulnerability reports
        report_amd64="${image_slug}_linux_amd64.md"
        report_arm64="${image_slug}_linux_arm64.md"

        # Metadata for Markdown
        echo "---" > "${OUTPUT_DIR}$report_amd64"
        echo "hide_table_of_contents: true" >> "${OUTPUT_DIR}$report_amd64"
        echo "---" >> "${OUTPUT_DIR}$report_amd64"
        echo "---" > "${OUTPUT_DIR}$report_arm64"
        echo "hide_table_of_contents: true" >> "${OUTPUT_DIR}$report_arm64"
        echo "---" >> "${OUTPUT_DIR}$report_arm64"

        # Run docker scout
        docker scout cves "$image" --format markdown --platform linux/amd64 >> "${OUTPUT_DIR}$report_amd64"
        docker scout cves "$image" --format markdown --platform linux/arm64 >> "${OUTPUT_DIR}$report_arm64"

        # Fix issues with usage of "<" in the generated markdown
        fix_less_than_usage "${OUTPUT_DIR}$report_amd64"
        fix_less_than_usage "${OUTPUT_DIR}$report_arm64"

        # Remove emojis
        sed -i '/:mag: /d' "${OUTPUT_DIR}$report_amd64"
        sed -i '/:mag: /d' "${OUTPUT_DIR}$report_arm64"
        sed -i '/:package: /d' "${OUTPUT_DIR}$report_amd64"
        sed -i '/:package: /d' "${OUTPUT_DIR}$report_arm64"

        # Add entry to the index file
        echo "| $image | $image_desc | [View Report](./$report_amd64) | [View Report](./$report_arm64) | [View Image]($dockerhub_url) |" >> "$INDEX_FILE"
    done < "$IMAGE_SET.txt"
}

# Clean out the generated directory
rm -rfv "$OUTPUT_DIR"

# Ensure the directory exists
mkdir -p "$OUTPUT_DIR"

# Add repos
helm repo add testkubeenterprise https://kubeshop.github.io/testkube-cloud-charts
helm repo add kubeshop https://kubeshop.github.io/helm-charts

# Update the charts to get the latest versions
helm repo update

# Get images from the control plane chart
helm template test testkubeenterprise/testkube-enterprise --skip-crds --set global.certificateProvider="" --set global.testWorkflows.createOfficialTemplates=false | grep "image:" | grep -v "{" | sed 's/"//g' | sed 's/docker.io\///g' | awk '{ print $2 }' | awk 'NF && !seen[$0]++' | sort > "$CP_IMAGES"

# Get images for the agent chart
helm template test kubeshop/testkube --skip-crds --set mongodb.enabled=false --set testkube-api.minio.enabled=false --set testkube-dashboard.enabled=false --set global.testWorkflows.createOfficialTemplates=false | grep "image:" | grep -v "{" | sed 's/"//g' | sed 's/docker.io\///g' | awk '{ print $2 }' | awk 'NF && !seen[$0]++' | sort > "$AGENT_IMAGES"

# Get the images for the workflows
helm template test kubeshop/testkube --skip-crds --set mongodb.enabled=false --set testkube-api.minio.enabled=false --set testkube-dashboard.enabled=false --set global.testWorkflows.createOfficialTemplates=false | grep "testkube-tw" | sed 's/"//g' | sed 's/docker.io\///g' | awk '{ print $2 }' | awk 'NF && !seen[$0]++' | sort >> "$AGENT_IMAGES"

# Sort these agent images
sort -o "$AGENT_IMAGES" "$AGENT_IMAGES"

# Specify image descriptions
add_image_desc "quay.io/brancz/kube-rbac-proxy" "Small HTTP proxy used by the Testkube operator to perform RBAC authorization against the Kubernetes API."
# Source: https://github.com/kubeshop/kube-webhook-certgen
add_image_desc "kubeshop/kube-webhook-certgen" "Used to generate certificates for the Testkube operator admission webhook."
add_image_desc "kubeshop/testkube-api-server" "API server for the Testkube agent."
add_image_desc "kubeshop/testkube-operator" "Controller for the Testkube operator."
add_image_desc "nats" "NATS message broker."
add_image_desc "natsio/nats-server-config-reloader" "NATS config reloader."
add_image_desc "natsio/nats-server-config-reloader" "NATS config reloader."
add_image_desc "rancher/kubectl" "Image containing the \`kubectl\` binary used in the admission webhooks of the Testkube operator."
add_image_desc "kubeshop/testkube-tw-init" "Image used to initialize a Workflow execution."
add_image_desc "kubeshop/testkube-tw-toolkit" "Image used within a Workflow execution."
add_image_desc "natsio/prometheus-nats-exporter" "NATS metrics exporter."
add_image_desc "bitnami/minio" "Object store used by the Testkube control plane to store logs and artifacts."
add_image_desc "ghcr.io/dexidp/dex" "Identity provider used by the Testkube control plane."
# Source: https://github.com/kubeshop/bitnami-containers
add_image_desc "kubeshop/bitnami-mongodb" "Database used by the Testkube control plane."
add_image_desc "kubeshop/testkube-enterprise-api" "API server for the Testkube control plane."
add_image_desc "kubeshop/testkube-enterprise-ui" "Testkube dashboard."
add_image_desc "kubeshop/testkube-enterprise-worker-service" "Testkube worker service used for background processing."
add_image_desc "alpine/mongosh" "Used as an init container to check whether MongoDB is ready before starting dependent services."
add_image_desc "kubeshop/testkube-migration" "Used to run migrations for MongoDB."

# Generate reports
generate_reports "testkubeenterprise/testkube-enterprise" "cp_images"
generate_reports "kubeshop/testkube" "agent_images"

echo "Index file and vulnerability reports have been generated"
