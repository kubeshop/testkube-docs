# Transferring Output Between TestWorkflow Steps

In Testkube TestWorkflows, there are several ways to transfer output from one step to another in consecutive steps. This guide covers the most effective approaches for passing data between workflow steps.

## Overview

Testkube TestWorkflows execute steps sequentially, and each step runs in its own container context. To pass data between steps, you need to use persistent storage mechanisms that survive across step boundaries.

## Methods for Transferring Output

### 1. File-Based Output Transfer

The most common and reliable approach is to write output to files in the first step and read them in the second step:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-output-transfer
spec:
  steps:
    - name: Generate data
      shell: |
        # Generate some output and save to file
        echo "Hello from step 1" > /data/output.txt
        echo "Additional data" >> /data/output.txt
        
    - name: Process data
      shell: |
        # Read the output from previous step
        content=$(cat /data/output.txt)
        echo "Processing: $content"
        # Process the data further...
```

### 2. Using the `file()` Function in Expressions

You can use the `file()` function to read file contents in expressions:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-file-expression
spec:
  steps:
    - name: Generate configuration
      shell: |
        echo '{"apiUrl": "https://api.example.com", "timeout": 30}' > /data/config.json
        
    - name: Use configuration
      shell: |
        # The file content is available via expressions
        config='{{ file("/data/config.json") }}'
        echo "Using config: $config"
```

### 3. Using Artifacts for Complex Data Transfer

For more complex data or when you need to preserve the output for later use:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-artifact-transfer
spec:
  steps:
    - name: Generate data
      shell: |
        mkdir -p /data/output
        echo "Step 1 output" > /data/output/step1.txt
        echo "More data" > /data/output/data.json
      artifacts:
        paths:
          - "/data/output/**/*"
          
    - name: Process data
      shell: |
        # Access the artifacts from previous step
        if [ -f /data/output/step1.txt ]; then
          content=$(cat /data/output/step1.txt)
          echo "Processing: $content"
        fi
```

## Real-World Example: API Testing with Data Transfer

Here's a practical example that demonstrates transferring API response data between steps:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: api-testing-with-data-transfer
spec:
  config:
    apiUrl:
      type: string
      default: "https://api.example.com"
  steps:
    - name: Authenticate and get token
      shell: |
        # Make API call to get authentication token
        response=$(curl -s -X POST "{{ config.apiUrl }}/auth" \
          -H "Content-Type: application/json" \
          -d '{"username": "testuser", "password": "testpass"}')
        
        # Extract token from response
        token=$(echo $response | jq -r '.token')
        echo "Token: $token"
        
        # Save token for next step
        echo $token > /data/auth_token.txt
        
    - name: Use token for API calls
      shell: |
        # Read token from previous step
        token=$(cat /data/auth_token.txt)
        echo "Using token: $token"
        
        # Make authenticated API call
        curl -s -X GET "{{ config.apiUrl }}/users" \
          -H "Authorization: Bearer $token" \
          -o /data/users.json
        
        # Process the response
        user_count=$(cat /data/users.json | jq '.users | length')
        echo "Found $user_count users"
        
    - name: Generate report
      shell: |
        # Use data from previous steps
        token=$(cat /data/auth_token.txt)
        user_count=$(cat /data/users.json | jq '.users | length')
        
        # Generate report
        cat > /data/report.txt << EOF
        API Test Report
        ===============
        API URL: {{ config.apiUrl }}
        Token: ${token:0:10}...
        Users Found: $user_count
        Timestamp: $(date)
        EOF
        
        echo "Report generated:"
        cat /data/report.txt
      artifacts:
        paths:
          - "/data/report.txt"
          - "/data/users.json"
```

## Key Points to Remember

1. **File System Persistence**: Files written in one step are available in subsequent steps within the same workflow execution.

2. **Working Directory**: By default, steps run in `/data/repo` or `/data` directory, so use absolute paths like `/data/output.txt` for reliable file access.

3. **Expressions**: Use `{{ file("/path/to/file") }}` to read file contents in expressions and configuration.

4. **Artifacts**: Use artifacts to preserve and share complex data structures between steps.

5. **Environment Variables**: Environment variables set in one step are not automatically available in subsequent steps unless explicitly saved to files.

6. **JSON Data**: For structured data, consider using JSON format and the `jq` command for parsing.

7. **Error Handling**: Always check if files exist before trying to read them in subsequent steps.

## Best Practices

- **Use descriptive file names**: Choose clear, descriptive names for your output files
- **Handle errors gracefully**: Check if files exist before reading them
- **Use absolute paths**: Always use absolute paths for file operations
- **Clean up temporary files**: Remove temporary files when no longer needed
- **Document your data flow**: Comment your workflow to make the data flow clear

The file-based approach is the most reliable and commonly used method for transferring output between consecutive steps in Testkube TestWorkflows.
