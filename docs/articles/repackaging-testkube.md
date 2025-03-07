# Repackaging Testkube for Different Distributions

Some organizations have strict requirements for running container images, such
as using specific base images like Red Hat UBI-based images. While Testkube does
not officially support alternative distributions, users can repackage Testkube
images according to their needs using the concepts in this guide.

:::warning

- These examples demonstrate how repackaging can be done, but Testkube does
  **not** actively publish or support images for different distributions.
- Users should verify the dependencies and security constraints of their chosen
  base images.
- Always refer to the official source repositories for the latest Dockerfiles.

:::

## Example: Repackaging Testkube Using Red Hat UBI

### Simple Repackaging Example
This example shows how to run the `testkube-api-server` on a Red Hat UBI image:

```dockerfile showLineNumbers
ARG TESTKUBE_VERSION=2.1.99
ARG UBI_VERSION=9

# For reference, Testkube Dockerfiles can be found here:
# https://github.com/kubeshop/testkube/tree/main/build/new
FROM kubeshop/testkube-api-server:${TESTKUBE_VERSION} as testkube

FROM registry.access.redhat.com/ubi${UBI_VERSION}/ubi

COPY --from=testkube /bin/app /bin/
USER 1001
EXPOSE 8088
ENTRYPOINT ["/bin/app"]
```

### Advanced Example with Additional Packages and Binaries

This example extends the previous one by installing additional dependencies and
copying necessary binaries:

```dockerfile showLineNumbers
ARG TESTKUBE_VERSION=2.1.99
ARG UBI_VERSION=9

# For reference, Testkube Dockerfiles can be found here:
# https://github.com/kubeshop/testkube/tree/main/build/new
FROM kubeshop/testkube-tw-toolkit:${TESTKUBE_VERSION} as testkube

FROM registry.access.redhat.com/ubi${UBI_VERSION}/ubi

# Install necessary packages
RUN dnf install -y ca-certificates openssl git openssh-clients && \
    dnf clean all

# Create a non-root user
RUN useradd --home / --no-create-home --uid 1001 default
USER 1001

COPY --from=testkube /.tktw-bin /.tktw-bin
COPY --from=testkube /toolkit /toolkit
COPY --from=testkube /init /init

ENTRYPOINT ["/toolkit"]
```

## Dockerfile Sources

- [Testkube Agent Dockerfiles](https://github.com/kubeshop/testkube/tree/main/build/_local)
- [Testkube Control Plane Dockerfiles](https://github.com/kubeshop/testkube-cloud-api/tree/main/build/_local)
- [Testkube Operator Dockerfile](https://github.com/kubeshop/testkube-operator/blob/main/Dockerfile)
- [kube-webhook-certgen Dockerfile](https://github.com/kubeshop/kube-webhook-certgen/blob/master/Dockerfile)

### UI Dockerfile

The Testkube UI Dockerfile is private, but the following snippets from its
Dockerfile illustrate its structure:

```dockerfile showLineNumbers
...

FROM nginxinc/nginx-unprivileged:1.27-alpine

...

COPY --from=build /app/import-meta-env /usr/local/bin/import-meta-env
COPY --from=build /app/packages/web/scripts/nginx-copy-content.sh /docker-entrypoint.d/4-copy-content.sh
COPY --from=build /app/packages/web/scripts/import-meta-env.sh /docker-entrypoint.d/5-import-meta-env.sh

RUN mkdir -p /app/nginx && cp -R /etc/nginx/. /app/nginx

COPY --from=build /app/packages/web/dist /app/dist
COPY --from=build /app/packages/web/.env.example /app/.env.example
COPY --from=build /app/nginx/nginx.conf /app/nginx/nginx.conf

USER 1001
EXPOSE 8080
```

### Dependencies

Testkube has some dependencies on other components such as:

- MongoDB
- Minio
- NATS
- Dex

You may need to find the corresponding Dockerfiles for these dependencies if
your organization requires custom-built images.

## Resources

- [Testkube On-Prem Image Inventory](./inventory/images)
