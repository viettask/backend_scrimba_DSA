1. Mỗi doanh nghiệp sẽ cài đặt Git server riêng để đảm bảo tính bảo mật
và khả năng kiểm soát

các doanh nghiệp chọn Gitlab là git server

tạo ra server riêng dành cho git
 clone

2. đổi sang user root và chỉnh lại ip address cho gitlab server
    vi /etc/netplan/00-installer-config.yaml

    `
    # This is the network config written by 'subiquity'
    networkL
    ~ ethernets:
        ens33:
            dhcp4: false
            addresses: [192.168.1.110/24]
            gateway4: 192.168.1.1
            nameservers:
                addresses: [8.8.8.8,8.8.4.4]
    ~ version: 2
    ~
    `

    lưu lại 
    áp dụng
    netplan apply

    kiểm tra lại 
    ip a

    đổi host name của server
    vi /etc/hostname

    và reboot lại
    reboot

    ssh vào gitlab server
    ssh viettask@192.168.139.127

    sudo -i

    google gitlab-ee package
    cài version 14, khuyến cao không nên xai version mới nhất vì rất nặng
    link phiên bản trong bài giảng
    ttps://packages.gitlab.com/gitlab/gitlab-ee/packages/ubuntu/focal/gitlab-ee_14.4.1-ee.0_amd64.deb

    copy câu lệnh vào server để chạy
    curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash

    sau khi kéo các package thành công
    chạy dòng thứ 2 để cài gitlab
    sudo apt-get install gitlab-ee=14.4.1-ee.0

    quá trình cài đặt thành công

    bây giờ cẩn setting 1 chút
    làm sao truy cập địa chỉ gitlab bằng 1 cái domain

    chỉnh sửa host
    vi /etc/hosts 

    thêm
    127.0.0.1   localhost
    127.0.1.1 ubuntu-server
    192.168.139.127 git.viettask.com (domain này kg nhất thiết phải có)

    mở file cấu hình của gitlab
    vi /etc/gitlab/gitlab.rb
    đổi tên domain và lưu lại

    chạy câu lệnh
    gitlab-ctl reconfigure

    google cụm từ 
    host path windows
    tất cả các server mà dùng domain chúng ta tự tạo thì đều phải add host

    trên windows
    c:\Windows\System32\Drivers\etc
    có file hosts

    phải copy file hosts ra ngoài và xóa file host drivers
    
