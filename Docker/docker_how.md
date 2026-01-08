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

    docker run --name ubuntu -it ubuntu:22.04
    truy cập vào docker image

    pwd

    ip a : kg dùng dc

    vd: 
    muốn cài đặt công cụ nào đó
    apt update
    apt install net-tools -y

    thoát khỏi môi trường container 
    exit

    xem trạng thái của các container còn đang chạy
    docker ps

    xem tất các container đang có ở server (kể cả off)
    docker ps -a

    để start 1 container thì có 2 cách
    cách 1: start bằng name
    cách 2: start bằng id
    docker start <name>/<CONTAINER ID - chỉ cần 3 ký tự đầu>

    chỉ định đến 1 container với câu lệnh thực thi
    docker exec -it ubuntu bash

    chạy web server nginx có port 
    docker run --name nginx -dp 9999:80 nginx:latest

    -d là chạy dưới nền
    bên tay trái 9999 là port ngoài server
    bên tay phải 80 là port đang ở trong container
    nếu kg thêm :latest hay phiên bản nó sẽ tìm bản mới nhất

    Sẽ tìm kiếm trên Docker Hub 

    để dừng các container 
    docker stop

    xóa docker
    docker rm 
    docker rm -f $(docker ps -a)
    xóa hết các image