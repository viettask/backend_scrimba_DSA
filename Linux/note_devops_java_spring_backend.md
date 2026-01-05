1. triển khai 1 dự án backend có database đầy đủ
    dự án shoeshop-ecommerce.zip

2. di chuyển dự án lên server
    scp .\shoeshop-ecommerce.zip manhnv@192.168.1.110:/

    kiểm tra xem dự án đã có trong folder chưa
    cd /home/manhnv

    giải nén dự án
    unzip shoeshop-ecommerce.zip

    di chuyển dự án vô trong projects
    mv shoeshop /projects
    ls -l /projects/

    tạo user tương ứng
    adduser shoeshop

    thay đổi quyền của thư mục
    chown -R shoeshop. /projects/shoeshop/

    thay đồi quyền 
    chmod -R 750 /projects/shoeshop/

    kiểm tra user shoeshop đã gắn cho dự án shoeshop chưa?
    ls -l /projects/

    google 
    how to build java project with Maven
    cần Java và Maven

    có file pom.xml
    di chuyển đến folder shoeshop
    cd /projects/shoeshop
    ls

    quan trọng là search đúng keywords

    