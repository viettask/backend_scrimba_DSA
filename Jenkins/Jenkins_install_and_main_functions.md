1. Tạo ra 1 server dành riêng cho Jenkins

2. Vào sudo -i 
    

3. tiến hành thay đổi IP
    vi etc/netplan/00-installer-config.yaml

    `
    # This is the network config written by 'subiquity'
    networkL
    ~ ethernets:
        ens33:
            dhcp4: false
            addresses: [192.168.139.126/24]
            gateway4: 192.168.139.1
            nameservers:
                addresses: [8.8.8.8,8.8.4.4]
    ~ version: 2
    ~
    `   
4. Tiến hành thay đổi hostname 
    vi /etc/hostname

5. apply cấu hình 
    netplan apply
    
    và tiến hành reboot lại
    reboot

6. Login vào Jenkins server
    ssh viettask@192.168.139.126
    ip a

7. tạo ra thư mục để chứa cài dặt của tools đó
    mkdir -p /tools/jenkins

    cd /tools/jenkins/

8. cung cấp sẵn file script chạy là tự động tạo ra dc Jenkins
    vi jenkins-install.sh 

`
#!/bin/bash

apt install openjdk-17-jdk openjdk-17-jre -y
java --version
wget -p -O - https://pkg.jenkins.io/debian/jenkins.io.key | apt-key add -
sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 5BA31D57EF5975CA
apt-get update
apt install jenkins -y
systemctl start jenkins
ufw allow 8080
`

lưu lại :x
cấp quyền thực thi
chmod +x jenkins-install.sh

có thể kiểm tra 
systemctl status jenkins

9. mở add host
    vi /etc/hosts

    cat nội dung password mặc đinh
    cat /var/lib/jenkins/secrets/initialAdminPassword

10. phuog phap để kg gõ port 8080 thì se phai đổi sang port 80
    sử dung web server là nginx
    apt install nginx

    sau khi cài đat thành cong thì 
    cd /etc/nginx

    và
    vi conf.d/jenkins.viettask.com.conf

`
    server 
    {
        listen 80;
        server_name jenkins.viettask.com;
        location / {
            proxy_pass http://jenkins.viettask.com:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection keep_alive;
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
            proxy_set_header X_Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X_Forwarded_Proto $scheme;
        }
    }
`

sau đó tiến hành lưu lại :x
và tiên hành 
systemctl restart nginx

đã chạy thành công

11. Giới thiệu các chức năng chính
    1. Manage Jenkins

    chúng ta có user jenkins tương ứng

    2. Node
    jenkins agent
    Node này là chính là việc bạn thêm những cái server triển khai dự án 
    vào trong Jenkins server 

    Jenkins server chi là nơi chạy các pipelines chứ kg phải là noi triển khai dự án

    3. Security 
    bạn xác dinh dc cách mà mình log in 
    mặc đinh Jenkins kg có phân quyền 

    Để mà phân quyền dc thi phai su dung 1 plugin 
    tiến hành cai dat plugin đo
    roi phan quyen cu the 

    Agents sẽ kết nối qua 1 cái port cp nào đó

    4. Credentials
    Luu những tài khoản mat khảu , mả hóa , secrets

    5. System logs

    6. Jenkins CLI 
    dùng để tự động moi thứ