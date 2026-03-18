#!/bin/bash
set -x

# install docker
dnf update -y
dnf install -y docker
systemctl start docker
systemctl enable docker

if ! id -u ssm-user &>/dev/null; then
    useradd -m ssm-user
    # CRITICAL: Grant passwordless sudo access (mimic default SSM behavior)
    echo "ssm-user ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/ssm-agent-users
    chmod 440 /etc/sudoers.d/ssm-agent-users
fi

usermod -aG docker ssm-user

# install docker compose
mkdir -p ~/.docker/cli-plugins
curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
docker compose version
# for ssm-user
sudo -u ssm-user bash <<EOF
mkdir -p ~/.docker/cli-plugins
curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
docker compose version
EOF

# update docker buildx
VERSION=$(curl -s https://api.github.com/repos/docker/buildx/releases/latest | jq -r .tag_name)
wget https://github.com/docker/buildx/releases/download/${VERSION}/buildx-${VERSION}.linux-arm64 -O buildx
mv buildx /home/ssm-user/.docker/cli-plugins/docker-buildx
chmod +x /home/ssm-user/.docker/cli-plugins/docker-buildx
# for ssm-user
sudo -u ssm-user bash <<EOF
VERSION=$(curl -s https://api.github.com/repos/docker/buildx/releases/latest | jq -r .tag_name)
wget https://github.com/docker/buildx/releases/download/${VERSION}/buildx-${VERSION}.linux-arm64 -O buildx
mv buildx /home/ssm-user/.docker/cli-plugins/docker-buildx
chmod +x /home/ssm-user/.docker/cli-plugins/docker-buildx
EOF

# install git
dnf install git -y

# install node
dnf install nodejs20 -y

sudo -u ssm-user bash <<EOF
git clone https://github.com/mstan19/professional-portfolio.git /home/ssm-user/professional-portfolio
cd /home/ssm-user/professional-portfolio
git checkout aws-deploy
npm install
docker compose up -d
EOF

