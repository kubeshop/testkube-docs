# Custom Artifact Upload

If you need to upload Test Artifacts to a custom S3/Minio location for audit or access reasons, you can easily add
a dedicated step to your Workflow for this:

```yaml
- name: Saving artifacts
  condition: always # Perform even if previous steps fail
  retry: # Retry 5 times if save failed
    condition: failed
    count: 5
  run:
    image: minio/mc:latest
    env:
    - name: MINIO_URL
      value: some-url
    - name: MINIO_ACCESSKEY
      value: some-accesskey
    - name: MINIO_SECRETKEY
      value: some-secretkey
    - name: MINIO_BUCKET
      value: some-bucket
    shell: |
      /usr/bin/mc config host add minio "$MINIO_URL" "$MINIO_ACCESSKEY" "$MINIO_SECRETKEY"
      /usr/bin/mc mb "minio/$MINIO_BUCKET" || true
      /usr/bin/mc cp /data/my-artifact.txt "minio/$MINIO_BUCKET/{{workflow.name}}/{{execution.id}}my-artifact.txt"
```
