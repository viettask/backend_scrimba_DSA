1. Copy 1 dự án từ máy cá nhân sang server
    scp todolist.zip manhnv@192.168.1.110:/home/manhnv
    ls

2. Giải nén file dự án này ra thư mục để sử dụng
    
    cài đặt công cụ Unzip
    sudo -i
    apt install unzip

    cd /home/manhnv/
    unzip todolist.zip
    ls

3. Tạo folder chứa dự án
    mkdir /projects
    mv todolist /projects :  di chuyển todolist vào folder projects

4. cần user riêng cho dự án
    adduser todolist

    thay đổi chử sở hữu và group cho dự án
    chown -R todolist:todolist /projects/todolist/

5. thay đổi quyền truy cập 
    chmod -R 750 /projects/todolist

6. tới bước build 
    triển khai dự án Vue
   Google how to build vue project
    How to install nodejs on ubuntu

   Trước khi build thì cài các dependencies

   chuyển qua user của dự án (không phải root)
   su todolist
   cd /projects/todolist

   Chỉ cần chú ý các file config:
   vi package.json                  // chú ý script : build ..
    vi vue.config.js                // file để check xem expose ra port bao nhiêu

    cài các dependencies
    npm install

    có thể xảy ra lỗi

    cuối cùng 
    npm run build

    tìm cách chạy file hoặc thư mục đó
    Vd: chạy nội dung trong thư mục dist
    ls dist/

    npm run serve

    cài nginx web server
    apt install nginx -y   // mặc định là mở port 80 
    kiểm tra bằng 
    netstat -tlpun

    tất cả các nơi nào đó mà thông tới server đều có thể truy cập đến địa chỉ 80 
    or ssh qua port 22
    0.0.0.0:22
    0.0.0.0:80

    tất cả các dự án frontend với nginx,
    chúng ta phải có 1 file cấu hình nào đấy 
    các file cấu hình cũa nginx đều lưu trong /etc/nginx

    cd /etc/nginx/
    ls


    chỉ cần lưu ý vài file thôi

    Đầu tiên, file mặc định của nginx sẽ nằm trong
    vi sites-available/default

    có thể đổi port sang 8999 thay vì 80 chẳng hạn

    sau khi thay đổi xong thì dùng
    nginx -t 
    để test các cú pháp, syntax rồi file có vấn đề gì không

    đế áp dụng cấu hình mới 
    systemctl restart nginx

    hiện tại port 80 đã không dc sử dụng nữa, đã chuyển sang 8999, check lại
    netstat -tlpn

    Làm sao mà cấu hình frontend của mình chạy được trên nginx
    tạo ra 1 file config
    vi conf.d/todolist.conf
    file cấu hình nginx dự án nên lưu ở
    /etc/nginx/conf.d/ten-du-an.conf

    .conf là định dạng chuẩn
    insert
    `
    server {
        listen 8081;
        root /projects/todolist/dist/;
        index index.html;
        try_files $uri $uri/ /index.html;
    }   

    sau đó lưu lại :x

    sau đó, test 
    nginx -t 

    systemctl restart nginx

    kiểm tra user cho nginx
    vi /etc/nginx/nginx.conf  (user: www-data)

    kiểm tra phân quyền cho todolist trên nginx
    ls /projects/todolist/dist
    ls -l /projects/

    vậy thì để dự án của bạn chạy đc trên nginx 
    tối thiểu thì user của nginx (www-data) phải nằm trong group todolist
    phải thêm user www-data vào group todolist
    usermod -aG todolist www-data

    để áp dụng cấu hình:
    systemctl restart nginx 

    đế mà áp dụng cấu hình mà không restart lại nginx 
    nginx -s reload

7. Thường các dự án front end thì sẽ build ra thư mục gì đó
    angular, vue thì thư mục dist
    react thì thư mục build

8. Summary
    Triển khai dự án
    1. dự án nào thì có công cụ tương ứng
    2. chỉ cần lưu ý duy nhất là file cấu hình trogn dự án
    3. triển khai dự án cần đúng 2 bước 1 là build 2 là run

    chú ý:
    1. mỗi dự án sẽ có thư mục riêng
    2. mỗi dự án sẽ có user riêng

9. Triển khai dự án React
    di chuyển dự án vô trong server
    scp .\vision.zip manhnv@192.168.1.110:/home/manhnv

    unzip vision.zip

    di chuyển vision vào trong projects
    mv vision /projects/

    tạo user mới
    adduser vision

    thay đổi chử sở hữu của folder vision cho vision
    chown -R vision. /projects/vision/

    thay đổi quyền tác động 
    chmod -R 750 /projects/vision/

    sau đó di chuyển vào project vision
    cd /projects/vision/

    ls

    thay đổi sang user vision
    su vision

    npm install

    thoát ra
    exit

    tạo 1 file service
    vi /lib/systemd/system/vision.service

    chuyển sang insert mode
    `
    [Service]
    Type=simple
    User=vision
    Restart=on-failure
    WorkingDirectory=/projects/vision/
    ExecStart=npm run start -- --port=3000
    `

    lưu file lại :x

    systemctl daemon-reload
    systemctl start vision
    systemctl status vision

    có thể kiểm tra trực tiếp
    netstat -tlpn


