# Pod Security Standards

Kubernetes allows one to apply security policies to pods and enforce them with
[a built-in
controller](https://kubernetes.io/docs/concepts/security/pod-security-admission/)
at the namespace level. Defined as [*Pod Security
Standards*](https://kubernetes.io/docs/concepts/security/pod-security-standards/),
there are three builtin profiles ranging from most permissive to most
restrictive.

This guide provides a path to bringing your Testkube installation
into compliance with the most restrictive profile:
[`restricted`](https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted).

## Updating an Existing Installation

In restricted mode, the pod containers must not run as root so to avoid downtime
and preserve the old state we should run a few jobs to change ownership of some
files in the existing persistent volumes.

### Control Plane

In the namespace hosting your Testkube control plane installation `kubectl apply`
a job which `chown`s files within the persistent volume of the NATS stateful
set, for example:

```yaml {5-6,14-15,24-25}
apiVersion: batch/v1
kind: Job
metadata:
  name: nats-enterprise-chown-job
  # Specify the namespace of your control plane installation
  namespace: testkube
spec:
  ttlSecondsAfterFinished: 86400
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: nats-enterprise-chown
          # Make sure this image or some other image with a shell is available in your private image registry
          image: busybox
          command: ["sh", "-c"]
          args:
            - chown -vR 1001:1001 /data
          volumeMounts:
            - name: nats-enterprise-pvc
              mountPath: /data
      volumes:
        - name: nats-enterprise-pvc
          persistentVolumeClaim:
            # Specify the name of the PVC for your control plane's NATS installation
            claimName: nats-enterprise-pvc
```

### Agent

In each namespace hosting an agent installation `kubectl apply` a job similar to
this:

```yaml {5-6,14-15,24-25}
apiVersion: batch/v1
kind: Job
metadata:
  name: nats-chown-job
  # Specify the namespace of your agent installation
  namespace: testkube-agent
spec:
  ttlSecondsAfterFinished: 86400
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: nats-chown
          # Make sure this image or some other image with a shell is available in your private image registry
          image: busybox
          command: ["sh", "-c"]
          args:
            - chown -vR 1001:1001 /data
          volumeMounts:
            - name: nats-pvc
              mountPath: /data
      volumes:
        - name: nats-pvc
          persistentVolumeClaim:
            # Specify the name of the PVC for your agent's NATS installation
            claimName: nats-pvc
```

## Configuration

:::warning

The UID/GID of 1000 is used throughout this guide, because official images for
testing frameworks such as Cypress and Playwright are specifically published to
work with a non-root user with a UID of 1000.

:::

Configure the following value in the `testkube-enterprise` chart:

```yaml
global:
  podSecurityContext:
    allowPrivilegeEscalation: false
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 1000
    fsGroup: 1000
    capabilities:
      drop: ["ALL"]
    seccompProfile:
      type: RuntimeDefault
  containerSecurityContext:
    allowPrivilegeEscalation: false
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 1000
    fsGroup: 1000
    capabilities:
      drop: ["ALL"]
    seccompProfile:
      type: RuntimeDefault
```

Configure the following values in the `testkube` chart:

```yaml
global:
  podSecurityContext:
    allowPrivilegeEscalation: false
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 1000
    fsGroup: 1000
    capabilities:
      drop: ["ALL"]
    seccompProfile:
      type: RuntimeDefault
  containerSecurityContext:
    allowPrivilegeEscalation: false
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 1000
    fsGroup: 1000
    capabilities:
      drop: ["ALL"]
    seccompProfile:
      type: RuntimeDefault
  testWorkflows:
    globalTemplate:
     enabled: true
     spec:
       pod:
         securityContext:
           allowPrivilegeEscalation: false
           runAsNonRoot: true
           runAsUser: 1000
           runAsGroup: 1000
           fsGroup: 1000
           capabilities:
             drop: ["ALL"]
           seccompProfile:
             type: RuntimeDefault
       container:
         securityContext:
           allowPrivilegeEscalation: false
           runAsNonRoot: true
           runAsUser: 1000
           runAsGroup: 1000
           fsGroup: 1000
           capabilities:
             drop: ["ALL"]
           seccompProfile:
             type: RuntimeDefault
```
