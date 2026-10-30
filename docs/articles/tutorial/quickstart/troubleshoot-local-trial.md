# Troubleshoot the local trial

When an install step fails, the installer shows a red row, such as `docker  not answering`, with the fix below it. This
page lists those rows, why they happen, and how to check the fix worked.

## Try this first

- Run the installer again. It continues where it stopped and keeps finished downloads.
- See where the install stands:

  ```sh
  testkube status local
  ```

- If your shell says `testkube: command not found`, use the full path, `~/.testkube/bin/testkube`, or add
  `~/.testkube/bin` to your `PATH`.
- If the last step failed, the installer saved a diagnostics file in `~/.testkube/logs/`, named
  `install-<date>-<time>.txt`.

## Docker

### `docker` not found

Docker is not installed, or not on your `PATH`. [Install Docker](https://docs.docker.com/get-started/get-docker/), start
it, then run the installer again.

Check: `docker info` prints details about the server.

### `docker` not answering, or not reachable

Docker is installed but not running, or still starting. Start Docker, wait until it is ready, then run the installer
again.

Check: `docker info` prints details about the server, not an error.

### `docker` permission denied

On Linux, your user is not allowed to use Docker yet. Add it to the `docker` group:

```sh
sudo usermod -aG docker $USER
newgrp docker
```

Check: `docker info` works without `sudo`. Then run the installer again.

### `docker` not found in WSL

On Windows, Docker Desktop must share Docker with your WSL distro. In Docker Desktop, open **Settings > Resources > WSL
integration**, turn on your distro, then run the installer again.

### `docker` not supported yet

The installer needs Docker. Podman is not supported yet. [Install Docker](https://docs.docker.com/get-started/get-docker/)
and run the installer again.

### Not enough CPU or memory

The `cpu` or `memory` row shows a warning, or the last step fails with `can't start: Docker doesn't have enough memory`.
Testkube needs at least 4 CPUs and 6 GB of memory for Docker.

- Docker Desktop: open **Settings > Resources** and raise **CPUs** and **Memory**.
- Colima: `colima stop && colima start --cpu 4 --memory 6`.
- Docker on Linux: Docker uses the machine's own CPU and memory. Free some up, or use a bigger machine.

Then run the installer again.

### `inotify` too low

On Linux and WSL, low file-watch limits can make Testkube crash at random. Raise them:

```sh
sudo sysctl fs.inotify.max_user_instances=512 fs.inotify.max_user_watches=524288
```

To keep them after a restart, add the same two settings to `/etc/sysctl.conf`.

## Network

### `network` can't reach a site

The installer downloads tools, charts, and images from the sites it lists. If you use a proxy, set `HTTPS_PROXY` in your
shell and in Docker's proxy settings, then run the installer again. A firewall must allow those sites.

### Docker Hub's download limit was reached

The last step fails with `can't download its image` and mentions the Docker Hub limit. Docker Hub limits downloads per
network for anonymous users. Finished downloads are kept. Wait a few hours or switch networks, then run the installer
again. See [Docker Hub usage limits](https://docs.docker.com/docker-hub/usage/).

### `kind`, `helm`, or `kubectl` could not download, or the download was damaged

Check your network, proxy, or firewall, then run the installer again. If the download is damaged every time, a proxy may
be changing downloads.

## Cluster

### `cluster` port taken

Another program started using one of Testkube's ports while the cluster was being created. Close that program, then run
the installer again. On a first install, the installer moves to free ports by itself.

### `cluster` name already taken

A kind cluster named `testkube` exists that this installer didn't create. If you don't need it, delete it, then run the
installer again:

```sh
~/.testkube/bin/kind delete cluster --name testkube
```

### `cluster` could not start

The cluster container exists but does not start. If a port is in use, close that program and run the installer again.
Otherwise, remove the cluster and run the installer again:

```sh
testkube uninstall local
```

## Testkube

### `testkube` gave up after a few minutes

A Testkube service did not become ready. The installer names the service and the reason below the row:

- **still downloading its image**: your connection is slow. Finished downloads are kept. Run the installer again.
- **can't download its image**: check your network, proxy, or firewall, then run the installer again.
- **can't start: Docker doesn't have enough memory**: see [Not enough CPU or memory](#not-enough-cpu-or-memory).
- **keeps crashing** or **failed**: this looks like a Testkube problem. Run the installer again, and if it fails again,
  [get help](#get-help).

### `testkube` timed out after 15 minutes

The install took too long, usually because downloads are slow. Finished downloads are kept. Run the installer again.

### `testkube` old data can't be opened, or saved passwords can't be read

`~/.testkube/data` holds data from an earlier install, but its passwords are lost or damaged. Restore
`~/.testkube/secrets.json` from a backup, or [start over](#start-over).

## License

### `license` cannot reach license.testkube.io

Testkube checks your license at `license.testkube.io` and cannot run without it. Check your network, proxy, or firewall,
then run the installer again.

### `license` not valid, or expired

Copy the key again from your trial email. If it has expired, [sign up for a new trial](https://testkube.io/get-started/on-prem).

### `license` no key given

Without a terminal to type the key in, the installer needs it up front:

```sh
curl -fsSL https://trial.testkube.io | TESTKUBE_LICENSE=<key> bash
```

## Start over

To remove the trial and everything it stored, then install from scratch:

```sh
testkube uninstall local --delete-data
curl -fsSL https://trial.testkube.io | TESTKUBE_LICENSE=<key> bash
```

:::warning
`--delete-data` deletes your test results and settings. You cannot undo this.
:::

## Get help

If the install still fails, [contact us](https://testkube.io/contact) and attach the diagnostics file from
`~/.testkube/logs/`.
