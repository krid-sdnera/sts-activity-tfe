# Setting up SVStem Terra Firma Explora server

## Clone this repo onto the server

```
mkdir /data/docker/
cd /data/docker/
git clone https://github.com/Scouts-Victoria-Program/sts-activity-tfe.git
```

## Configure enp1s0 and br0 via netplan

```
sudo ln -sf `pwd`/configuration/netplan/01-sts-tfe-network-config.yaml /etc/netplan/01-sts-tfe-network-config.yaml

sudo netplan apply
```

## Enabling routing across the network

Source: https://ubuntu.com/server/docs/network-configuration

```
sudo vim /etc/sysctl.conf
sudo /etc/init.d/networking restart
```

Edit the following line:

```
net.ipv4.ip_forward = 1
```

## Install docker

> Dont use docker via snap!

```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh
rm ./get-docker.sh
```

## Disable systemd-resolved's DNS server.

Source: https://www.turek.dev/posts/disable-systemd-resolved-cleanly/

```
sudo mkdir -p /etc/systemd/resolved.conf.d/
sudo tee -a /etc/systemd/resolved.conf.d/disable-stub.conf > /dev/null << EOF
[Resolve]
DNSStubListener=no
EOF
sudo ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf
sudo systemctl restart systemd-resolved
```

## Create .env file from template

```
cp .env.template .env

# TODO THE JITSI secret creation

vim .env
```

## Create self signed cert for Nginx

```
cd nginx/ssl/
openssl req -config cert.conf -newkey rsa -x509 -days 365 -out nginx-selfsigned.crt
```

## Start docker containers

```
sudo docker compose up -d
```

To later stop the containers use

```
sudo docker compose down
```
