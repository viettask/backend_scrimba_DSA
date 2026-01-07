1. Cài đặt và sử dụng Docker
    cài đặt Docker trên ubuntu-server

    tạo thư mục để lưu trữ các cấu hình công cụ:
    mkdir /tools
    cd /tools
    mkdir docker
    cd docker
    vi install-docker.sh

    nội dung cài đặt 
    #!/bin/bash

sudo apt update
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce
sudo systemctl start docker
sudo systemctl enable docker
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker --version
docker-compose --version

    sau đó lưu file lại
    để chạy đc file sh này, bạn phải cấp quyền thực thi cho nó
    chmod +x install-docker.sh
    ls -l

    chạy file .sh
    cách 1: ./install-docker.sh
    cách 2: sh install-docker.sh
    cách 3: bash install-docker.sh

    google hay dùng Claude Ai

2. Docker là môi trường độc lập 
    vd ubuntu docker image

    docker pull ubuntu:22.04

    xem docker images
    docker images