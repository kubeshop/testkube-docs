:::info

Based on chart `testkube-enterprise` as of version `1.186.0`

:::

| Image | Description | Vulnerability Report (`linux/amd64`) | Vulnerability Report (`linux/arm64`) |
|-------|-------------|--------------------------------------|--------------------------------------|
| alpine/mongosh:2.0.2 | Used as an init container to check whether MongoDB is ready before starting dependent services. | [View Report](./mongosh-2.0.2_linux_amd64.md) | [View Report](./mongosh-2.0.2_linux_arm64.md) |
| bitnami/minio:2024.8.3-debian-12-r1 | Object store used by the Testkube control plane to store logs and artifacts. | [View Report](./minio-2024.8.3-debian-12-r1_linux_amd64.md) | [View Report](./minio-2024.8.3-debian-12-r1_linux_arm64.md) |
| ghcr.io/dexidp/dex:v2.40.0 | Identity provider used by the Testkube control plane. | [View Report](./dex-v2.40.0_linux_amd64.md) | [View Report](./dex-v2.40.0_linux_arm64.md) |
| kubeshop/bitnami-mongodb:7.0.12 | Database used by the Testkube control plane. | [View Report](./bitnami-mongodb-7.0.12_linux_amd64.md) | [View Report](./bitnami-mongodb-7.0.12_linux_arm64.md) |
| kubeshop/testkube-enterprise-api:1.10.67 | API server for the Testkube control plane. | [View Report](./testkube-enterprise-api-1.10.67_linux_amd64.md) | [View Report](./testkube-enterprise-api-1.10.67_linux_arm64.md) |
| kubeshop/testkube-enterprise-ui:2.6.2 | Testkube dashboard. | [View Report](./testkube-enterprise-ui-2.6.2_linux_amd64.md) | [View Report](./testkube-enterprise-ui-2.6.2_linux_arm64.md) |
| kubeshop/testkube-enterprise-worker-service:1.10.41 | Testkube worker service used for background processing. | [View Report](./testkube-enterprise-worker-service-1.10.41_linux_amd64.md) | [View Report](./testkube-enterprise-worker-service-1.10.41_linux_arm64.md) |
| nats:2.10.16-alpine | NATS message broker. | [View Report](./nats-2.10.16-alpine_linux_amd64.md) | [View Report](./nats-2.10.16-alpine_linux_arm64.md) |
| natsio/nats-server-config-reloader:0.14.3 | NATS config reloader. | [View Report](./nats-server-config-reloader-0.14.3_linux_amd64.md) | [View Report](./nats-server-config-reloader-0.14.3_linux_arm64.md) |
| natsio/prometheus-nats-exporter:0.15.0 | NATS metrics exporter. | [View Report](./prometheus-nats-exporter-0.15.0_linux_amd64.md) | [View Report](./prometheus-nats-exporter-0.15.0_linux_arm64.md) |
