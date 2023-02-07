---
sidebar_position: 2
---

# Instalando kubectl en tu maquina

Para configurar instalar y configurar kubectl en tu equipo sigue estos pasos

## Windows

**Descarga la ultima version con el comando curl**

```
curl.exe -LO "https://dl.k8s.io/release/v1.26.0/bin/windows/amd64/kubectl.exe"\
```

**Descarga el archivo de comprobación de registro**

```
curl.exe -LO "https://dl.k8s.io/v1.26.0/bin/windows/amd64/kubectl.exe.sha256"
```

**Valida el binario de kubectl**

```
CertUtil -hashfile kubectl.exe SHA256
type kubectl.exe.sha256
```

**Agrega al Path de windows como una variable de entorno**

**Prueba la configuración**

```
kubectl version --client
```

## Linux

**Descarga la ultima version con el comando curl**

```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```

**Descarga el archivo de comprobación de registro**

```
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
```

**Valida el binario de kubectl**

```
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
```

**Instala kubectl**

```
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

**Prueba la configuración**

```
kubectl version --client
```

Ahora lo que debemos hacer es obtener el archivo **kube-config.conf** y colocarlo en la carpeta **.kube** de aquí kubectl obtendría las credenciales de acceso a tu cluster para enviar las órdenes de configuración

:::info
la carpeta .kube debes crearla en:

Linux: **/home/username/.kube**

Windows: **C:\Users\omarv\\.kube**
:::

Ya una vez que tenemos nuestro equipo configurado con kubectl y las credenciales del cluster podremos desplegar un app en kubernetes, hay varias maneras de hacer esto la primera será con un container.