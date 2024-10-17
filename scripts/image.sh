#!/bin/bash

INPUT_FILE="images.txt"

# Get images from the enterprise chart
helm template test testkubeenterprise/testkube-enterprise --skip-crds --set global.certificateProvider="" --set global.testWorkflows.createOfficialTemplates=false | grep "image:" | grep -v "{" | sed 's/"//g' | sed 's/docker.io\///g' | awk '{ print $2 }' | awk 'NF && !seen[$0]++' | sort > "$INPUT_FILE"

OUTPUT_DIR="../docs/articles/inventory/generated/"
INDEX_FILE="${OUTPUT_DIR}images.md"

# Create the header for the index file
echo "| Image | Description | Vulnerability Report (linux/amd64) | Vulnerability Report (linux/arm64) |" > "$INDEX_FILE"
echo "|-------|-------------|------------------------------------|------------------------------------|" >> "$INDEX_FILE"

# Loop through each image in the input file
while IFS= read -r image; do
    # Extract image name without the registry prefix
    image_name=$(echo "$image" | awk -F/ '{print $NF}' | tr ':' '-')

    # Fetch the description metadata for the image
    docker pull "$image"
    description=$(docker inspect "$image" --format '{{ index .Config.Labels "org.opencontainers.image.description" }}' 2>/dev/null)
    if [ -z "$description" ]; then
        description="N/A"
    fi

    # File names for the vulnerability reports
    report_amd64="${image_name}_linux_amd64.md"
    report_arm64="${image_name}_linux_arm64.md"

    # Run docker scout for linux/amd64
    docker scout cves "$image" --format markdown --platform linux/amd64 > "${OUTPUT_DIR}$report_amd64"

    # Run docker scout for linux/arm64
    docker scout cves "$image" --format markdown --platform linux/arm64 > "${OUTPUT_DIR}$report_arm64"

    # Remove all instances of "<!-- unspecified: 0 -->" from the reports
    sed -i '/<!-- unspecified: 0 -->/d' "${OUTPUT_DIR}$report_amd64"
    sed -i '/<!-- unspecified: 0 -->/d' "${OUTPUT_DIR}$report_arm64"

    # Add entry to the index file
    echo "| $image | $description | [View Report](./$report_amd64) | [View Report](./$report_arm64) |" >> "$INDEX_FILE"
done < "$INPUT_FILE"

echo "Index file and vulnerability reports have been generated"
