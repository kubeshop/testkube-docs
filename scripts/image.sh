#!/bin/bash

OUTPUT_DIR="../docs/articles/inventory/generated/"
CP_IMAGES="cp_images.txt"
AGENT_IMAGES="agent_images.txt"

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

generate_reports() {
    local CHART_NAME=$1
    local IMAGE_SET=$2

    INDEX_FILE="${OUTPUT_DIR}${IMAGE_SET}.md"
    VERSION=$(get_latest_helm_version "$1")

    # Create the header for the index file
    echo ":::info" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"
    echo "Based on chart \`$(basename $CHART_NAME)\` as of version \`${VERSION}\`" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"
    echo ":::" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"

    echo "| Image | Description | Vulnerability Report (\`linux/amd64\`) | Vulnerability Report (\`linux/arm64\`) |" >> "$INDEX_FILE"
    echo "|-------|-------------|--------------------------------------|--------------------------------------|" >> "$INDEX_FILE"

    # Loop through each image in the input file
    while IFS= read -r image; do
        # Extract image name without the registry prefix
        image_name=$(echo "$image" | awk -F/ '{print $NF}' | tr ':' '-')

        # Fetch the image and the description metadata for the image
        docker pull "$image"
        description=$(docker inspect "$image" --format '{{ index .Config.Labels "org.opencontainers.image.description" }}' 2>/dev/null)
        if [ -z "$description" ]; then
            description="N/A"
        fi

        # File names for the vulnerability reports
        report_amd64="${image_name}_linux_amd64.md"
        report_arm64="${image_name}_linux_arm64.md"

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

        # Remove emojis
        sed -i '/:mag: /d' "${OUTPUT_DIR}$report_amd64"
        sed -i '/:mag: /d' "${OUTPUT_DIR}$report_arm64"
        sed -i '/:package: /d' "${OUTPUT_DIR}$report_amd64"
        sed -i '/:package: /d' "${OUTPUT_DIR}$report_arm64"

        # Add entry to the index file
        echo "| $image | $description | [View Report](./$report_amd64) | [View Report](./$report_arm64) |" >> "$INDEX_FILE"
    done < "$IMAGE_SET.txt"
}

# Clean out the generated directory
rm -rfv "$OUTPUT_DIR"

# Ensure the directory exists
mkdir -p "$OUTPUT_DIR"

# Update the charts to get the latest versions
helm repo update

# Get images from the control plane chart
helm template test testkubeenterprise/testkube-enterprise --skip-crds --set global.certificateProvider="" --set global.testWorkflows.createOfficialTemplates=false | grep "image:" | grep -v "{" | sed 's/"//g' | sed 's/docker.io\///g' | awk '{ print $2 }' | awk 'NF && !seen[$0]++' | sort > "$CP_IMAGES"

# Get images for the agent chart
helm template test kubeshop/testkube --skip-crds --set mongodb.enabled=false --set testkube-api.minio.enabled=false --set testkube-dashboard.enabled=false --set global.testWorkflows.createOfficialTemplates=false | grep "image:" | grep -v "{" | sed 's/"//g' | sed 's/docker.io\///g' | awk '{ print $2 }' | awk 'NF && !seen[$0]++' | sort > "$AGENT_IMAGES"

generate_reports "testkubeenterprise/testkube-enterprise" "cp_images"
generate_reports "kubeshop/testkube" "agent_images"

echo "Index file and vulnerability reports have been generated"
