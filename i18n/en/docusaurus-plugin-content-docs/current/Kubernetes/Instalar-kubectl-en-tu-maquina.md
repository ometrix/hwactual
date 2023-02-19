---
sidebar_position: 2
---

# Installing kubectl on your machine

To install and configure kubectl on your computer follow these steps

## Windows

**Download the latest version with the curl command**

```
curl.exe -LO "https://dl.k8s.io/release/v1.26.0/bin/windows/amd64/kubectl.exe"\
```

**Download the registration check file**

```
curl.exe -LO "https://dl.k8s.io/v1.26.0/bin/windows/amd64/kubectl.exe.sha256"
```

**Validate the kubectl binary**

```
CertUtil -hashfile kubectl.exe SHA256
type kubectl.exe.sha256
```

**Adds to the windows Path as an environment variable**

**Test the configuration**

```
kubectl version --client
```

## Linux

**Download the latest version with the curl command**

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```

**Download the registration check file**

```
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
```

**Validate the kubectl binary**

```
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
```

**Install kubectl**

```
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

**Test the configuration**

```
kubectl version --client
```

Now what we have to do is to get the **kube-config.conf** file and place it in the **.kube** folder from here kubectl would get the access credentials to your cluster to send the configuration commands.

:::info
the .kube folder must be created in:

Linux: **/home/username/.kube**

Windows: **C:\Users\omarv\\.kube**
:::

Once we have our team configured with kubectl and the cluster credentials we can deploy an app in kubernetes, there are several ways to do this, the first one will be with a container.