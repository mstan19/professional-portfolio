#!/bin/bash
set -x

# install docker
dnf update -y
dnf install -y docker
systemctl start docker
systemctl enable docker
usermod -aG docker ssm-user

# install docker compose
mkdir -p ~/.docker/cli-plugins
curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
docker compose version

# update docker buildx
VERSION=$(curl -s https://api.github.com/repos/docker/buildx/releases/latest | jq -r .tag_name)
wget https://github.com/docker/buildx/releases/download/${VERSION}/buildx-${VERSION}.linux-arm64 -O buildx
mv buildx ~/.docker/cli-plugins/docker-buildx
chmod +x ~/.docker/cli-plugins/docker-buildx
# install git
dnf install git -y

# install node
dnf install nodejs20 -y

