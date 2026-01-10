1. các thành phần, thường dùng:
Docker volume
Docker compose
Docker network

2. Docker volume
chúng ta có 1 thư mục chung liên kết giữa containers và servers

Trong dự án shoeshop
Thông thường để build dự án ra 1 thư mục target,
chúng ta cần cài đặt Java và Maven 

docker run --rm -v `pwd`:/app --workdir="/app" maven:3.5.3-jdk-8-alpine mvn install -DskipTests=true
`pwd` là thư mục hiện tại
mount với container là /app
xác định base image 
Khi mà container này dc chạy lên và build thành công ra thư mục target 
và thư mục target đó 
nó sẽ tiến hành xóa luôn container đó

sau đó, 
ls


3. Tạo ra 1 database bằng docker , sẽ sử dụng Mount Volume 
Sẽ tiến hành tạo ra 1 Maria database

Tạo ra thư mục
mkdir -p /db/mariadb-1 

tiến hành Mount
docker run -v /db/mariadb-1/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 --name mariadb-1 -d mariadb:10.6 

Đây chính là 1 base image, chỉ cần google sẽ thấy dc các cú pháp của maria db

Tiến hành kiểm tra 
docker ps

netstat -tlpn

mysql -h 192.168.1.110 -P 3307 -u root -p

show database

create database demo

exit

kiểm tra dữ liệu container
ls /db/mariadb-1/

docker rm -f mariadb-1

docker run -v /db/mariadb-1/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 --name mariadb-1 -d mariadb:10.6 

sau đó truy cập lại mysql
mysql -h 192.168.1.110 -P 3307 -u root -p

vậy chính xác là, nếu bạn kg sử dụng Mount Volume
mà bạn chạy container db này lên
và khi bạn xóa container ấy đi 
tất cả các dữ liệu sẽ mất hết nếu bạn kg dùng Mount Volume

4. chỉ cần chứng minh dc 
tại sao tôi dùng?
độ hiệu quả của nó?
Đều hoàn toàn là tốt cả

5. Docker Compose
dc sinh ra để lưu trữ cấu hình 
và chỉnh sửa dễ dàng hơn

vi docker-compose.yml 

`   
version: '3.8'
services:
    db1:
        image: mariadb:10.6
        volume: 
            - /db/mariadb-1:/var/lib/mysql
        environment:
            MYSQL_ROOT_PASSWORD: root
        ports:
            - "3307:3306"
        container_name: mariadb-1   
        restart: always
`
lưu lại :x

    docker-compose up -d
    vậy là container dc tạo thành công
    tiến hành kiểm tra bằng lệnh
    docker-compose ps

có thể tạo ra container khác tuong tự,
sẽ tiến hành chỉnh sửa 
    vi src/main/resources/application/properties

thì bạn sẽ cần phải chỉnh sửa 
sau đó thì vào lại file docker compose
    vi docker-compose.yml

`   
version: '3.8'
services:
    db1:
        image: mariadb:10.6
        volume: 
            - /db/mariadb-1:/var/lib/mysql
        environment:
            MYSQL_ROOT_PASSWORD: root
        ports:
            - "3307:3306"
        container_name: mariadb-1   
        restart: always

    app-backend:
        image: shoeshop:v3
        ports:
            - "8081:8080"
        container_name: shoeshop-1  
        restart: always       
`

sau đó, lưu lại :x
sau đó chạy 
    docker-compose up -d 

6. Google Docker version
sẽ thấy Docker engine release

7. Khi sử dụng 
docker-compose ps
thì chỉ liệt kê chính xác những cái container nào đang chạy những cái docker
compose.yml đấy thôi
vậy thì hiện tại có 2 service và đã có thể truy cập ở bên ngoài

8. Docker Network
trong file docker-compose đang có 2 service
Nếu mình chọn cho nó 2 mảng khác nhau
thì 2 service này sẽ kg thông dc với nhau

và kiểm tra bằng lệnh
    docker inspect shoeshop-1
    
thì thấy có 1 Ip gateway là 172.18.0.1 là IP bên trong container
IP address là 172.18.0.2

tương tự thì kiểm tra trong mariadb-1
    docker inspect mariadb-1
và Ip address là 172.18.0.3

Thế thì 2 containers này hoan toàn có thể nói chuyện dc với nhau
vì đang thông với nhau

Mình sẽ sử dung 
    docker exec -it shoeshop-1 sh

Khi đã vào môi truog container để mà xác đinh chính xác no có thông kg bằng lệnh ping

    apt update

    apt install iputil-ping -y 

    ping 172.18.0.3

chính xác là Docker network dang thông cho 2 server này