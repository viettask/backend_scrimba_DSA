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

    Đầu tiên, cài Java và Maven
    Google how to install Java on ubuntu

    mở file pom.xml
    vi pom.xml

    cài java
    apt install openjdk-17-jdk openjdk-17-jre

    cài Maven
    apt install Maven

    kiểm tra
    java -version
    mvn -v

    đã có các công cụ cần thiết Java + Maven

    dự án này có database thì làm sao cài đặt database
    thì các file cấu hình sẽ cho biết là port chạy ở đâu và connect đến database nào.

    Google config database spring boot
    tìm file application.properties

    ls src/main/resources

    vi src/main/resources/application.properties

    cài database server
    apt install mariadb-server

    netstat -tlpun

    trước khi sửa config thì phải stop mariadb
    systemctl stop mariadb

    ls /etc/mysql
    lt /etc/mysql/mariadb.conf.d/
    vi /etc/mysql/mariadb.conf.d/50-server.cnf
    
    sau đó vô insert mode
    và sửa dòng
    bind-address = 0.0.0.0 

    lưu file lại

    tiến hành khởi động lại
    systemctl restart mariadb

    tiến hành kiểm tra lại
    netstat -tlpun

    phải thêm file sql vào dự án database
    
    vô mysql
    mysql -u root

    xem các database đang có
    show databases;

    tạo ra database shoeshop
    create database shoeshop;

    Khi mà tạo database ra , tương ứng cũng phải tạo user, chứ khogn dùng user root
     create user 'shoeshop'@'%' identified 'shoeshop';
                                            mật khẩu

     @'%' là phạm vi là truy cập đến tat cả các server

     tạo database , tạo user rồi
     phải gán quyền cho user có quyền tác động lên database đó

     grant all privileges on shoeshop.* to 'shoeshop'@'%'
                                     tác động * là tất cả tài nguyên

    sau khi đã gán quyền nạy nọ, phải lưu lại các quyền mà ta thay đổi
    flush privileges;

    Giờ đăng nhập bằng user shoeshop xem coi có thấy được database shoeshop không?
    exit

    để truy cập đến database
    mysql -h <ip-server> -P <port> -u shoeshop -p//-h là hot // -u là user //-p là nhập mật khẩu

    mysql -h 192.168.1.110 -P 3306

    show databases;

    làm sao import dc file .sql vào database
    sử dụng database đó đã
    use shoeshop;
    show tables;
    source <đường dẫn của file sql>
    source /projects/shoeshop/shoe_shopdb.sql

    show tables;

   Ctrl-C -- exit!

   sửa file cấu hình của database
   vi src/main/resources/application.properties

    insert mode
    spring.datasource.url=jdbc:mysql://192.168.1.110:3306/shoeshop
    spring.datasource.username=shoeshop
    spring.datasource.password=shoeshop

    lưu lại

    mvn install --help
    mvn install -DskipTests=true // bỏ qua quá trình test của tool Maven

    ls ra thì thấy thư mục target
    ls target/
    thì thấy shoe-ShoppingCart-0.0.1-SNAPSHOT.jar

    chạy câu lệnh
    java -jar target/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar

    dự án đã start thành công ở port 8080

    câu lênh
    nohup java -jar target/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar 2>&1

    câu lệnh
    ps -ef| grep | 
    có ý nghĩa là output của câu lệnh trước là input của câu lênh sau

    grep là để tìm kiếm
    tìm kiếm tiến trình đang chạy là 
    ps -ef| grep shoe

    kill -9 <PID> 
    -9 là buộc dừng
    vd: kill -9 5652

    xóa file đi đê làm lại với user shoeshop
    rm -rf nohup.out target/

    tail -f nohup.out 

3. Summary - triển khai dự án backend
    1. cài đặt công cụ cần thiết => công cụ
    2. xem và sửa file cấu hình => file cấu hình
    3. cài đặt và thiết lập database => công cụ
    4. build dự án => build
    5. run dự án => run
    6. kiểm tra hoạt động => check
