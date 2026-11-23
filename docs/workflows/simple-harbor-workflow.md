```yaml showLineNumbers title="Basic Harbor Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: harbor-getting-started
  namespace: testkube
  labels:
    docs: example
    type: ai
spec:
  config:
    agent:
      type: string
      default: terminus-2
    model:
      type: string
      default: openai/gpt-5.4-mini
    minReward:
      type: string
      default: "1.0"
  content:
    files:
      - path: /data/tasks/hello-world/task.toml
        content: |
          schema_version = "1.4"

          [task]
          name = "testkube/hello-world"

          [verifier]
          timeout_sec = 120.0

          [agent]
          timeout_sec = 300.0

          [environment]
          build_timeout_sec = 600.0
          cpus = 1
          memory_mb = 1024
      - path: /data/tasks/hello-world/instruction.md
        content: |
          Create a file called /app/hello.txt with "Hello, world!" as the content.
      - path: /data/tasks/hello-world/environment/Dockerfile
        content: |
          FROM ubuntu:24.04

          WORKDIR /app
      - path: /data/tasks/hello-world/solution/solve.sh
        mode: 0755
        content: |
          #!/bin/bash
          echo "Hello, world!" > /app/hello.txt
      - path: /data/tasks/hello-world/tests/test.sh
        mode: 0755
        content: |
          #!/bin/bash
          if [ "$(cat /app/hello.txt 2>/dev/null)" = "Hello, world!" ]; then
            echo 1 > /logs/verifier/reward.txt
          else
            echo 0 > /logs/verifier/reward.txt
          fi
      - path: /data/tasks/count-errors/task.toml
        content: |
          schema_version = "1.4"

          [task]
          name = "testkube/count-errors"

          [verifier]
          timeout_sec = 120.0

          [agent]
          timeout_sec = 300.0

          [environment]
          build_timeout_sec = 600.0
          cpus = 1
          memory_mb = 1024
      - path: /data/tasks/count-errors/instruction.md
        content: |
          Count the lines in /app/app.log that contain the word ERROR and write only that number to /app/errors.txt.
      - path: /data/tasks/count-errors/environment/Dockerfile
        content: |
          FROM ubuntu:24.04

          WORKDIR /app

          RUN printf 'INFO start\nERROR database unavailable\nWARN slow response\nERROR request timeout\nINFO done\n' > /app/app.log
      - path: /data/tasks/count-errors/solution/solve.sh
        mode: 0755
        content: |
          #!/bin/bash
          grep -c ERROR /app/app.log > /app/errors.txt
      - path: /data/tasks/count-errors/tests/test.sh
        mode: 0755
        content: |
          #!/bin/bash
          if [ "$(tr -d '[:space:]' < /app/errors.txt 2>/dev/null)" = "2" ]; then
            echo 1 > /logs/verifier/reward.txt
          else
            echo 0 > /logs/verifier/reward.txt
          fi
  container:
    workingDir: /data
    image: docker:27.4.0-dind
    env:
      - name: MIN_REWARD
        value: "{{config.minReward}}"
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    securityContext:
      privileged: true
    resources:
      requests:
        cpu: "1"
        memory: 2Gi
  steps:
    - name: Run tasks and quality gate
      shell: |
        set -e
        dockerd-entrypoint.sh > /tmp/dockerd.log 2>&1 &
        until docker info > /dev/null 2>&1; do sleep 1; done

        apk add --no-cache bash curl jq
        curl -LsSf https://astral.sh/uv/install.sh | sh
        export PATH="$HOME/.local/bin:$PATH"
        uv tool install harbor
        harbor --version

        set +e
        harbor run -p tasks -a {{config.agent}} -m {{config.model}} -o jobs --job-name harbor
        echo "harbor exit code: $?"
        set -e

        if ! jq -e --argjson min "$MIN_REWARD" '
          .stats.evals | to_entries[0].value | .n_errors == 0 and .metrics[0].mean >= $min
        ' jobs/harbor/result.json > /dev/null; then
          echo "Quality gate FAILED"
          exit 1
        fi
        echo "Quality gate PASSED"
    - name: Export metrics
      condition: always
      container:
        image: docker.io/kubeshop/testkube-ai-metrics-parser:latest
      shell: testkube-ai-metrics-parser harbor -i 'jobs/*/*/result.json' -o metrics/harbor.lp --stdout
    - name: Save results and metrics
      condition: always
      artifacts:
        paths:
          - jobs/**/*
          - metrics/*.lp
```
