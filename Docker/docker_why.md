1. Công cụ đó để làm gì?
    Tại sao cần dùng nó?
    và lúc nào cần nó

    Bạn cần nắm đc lý thuyết bản chất của công cụ đó
    Tại sao tôi áp dụng Docker vào dự án này.

    Tại sao cần sử dụng Docker?
    Tùy theo doanh nghiệp và dự án sẽ có những cách triển khai phù hợp

    Cách triển khai container có khác gì với cách triển khai Daemon mà chúng ta học trước đó

    Trong cách trước, thì phải cài đạt các công cụ Maven, Java, NodeJs trên chính server đó ubuntu-server

    Khi đó xảy ra vấn đề, các dự án có các version công cụ khác nhau,
    Dự án A yêu cầu chính xác Node11
    dự án B yêu cầu Node18
    Khi đó việc cài cắm nhiều công cụ trên 1 server và việc quản lý, sử dụng chúng sẽ gặp chút khó khăn

    Đối với các bạn chưa rành về Linux sẽ tốn thêm thời gian để nghiên cứu
    Có nguy cơ, là nếu không cẩn thận các dự án cũng sẽ ảnh hưởng đến nhau vì đang cùng nhau dùng chung 1 hạ tầng

    Trên thực tế, thì có thể họ triển khai dự án kg chỉ trên 1 server,
    mà họ có thể triển khai trên nhiều server, và sử dung Load balancer (tùy theo user mà truy cập vào server nào, vậy thì sẽ kg bị quá tải khi có nhiều ng truy cập,
    vì thế mà việc triển khai Daemon sẽ gặp chút khó khăn hơn vì phải cài cắm các công cụ cần thiết và triển khai giống hệt nhau trên các server)

    Vậy thì triển khai Container thì có lợi ích gì?
    cần phải có công cụ nào đó, đảm bảo chạy dự án trên các nền tảng khác nhau (Win, Linux, MacOS) và phải linh hoạt triển khai dự án
    Thi lúc này chúng ta phải đóng gói dự án thành 1 cục và cục đó là Docker Image
    và đưa lên trên Registry (1 nơi chuyên biệt để chứa các Docker Image)
    Sau khi các thiết bị khác hayy server kéo cục Docker Image đó về , chỉ cần chạy lên Container .
    Sự khác biệt ở đay là chỉ cần cài đặt Docker là chạy dc cac container mà kg bị phụ thuộc vào nền tảng
    Docker là nền tảng ảo hóa cấp container , tạo ra môi trường độc lập cho phép ng phát triển đóng gói ứng dụng và tất cả các phụ thuộc của nó vào 1 container duy nhất
    Docker thì gọn nhẹ hơn server, chỉ chứa những thứ cần thiết để chạy dc dự án thôi


2. Docker Architecture

- chúng ta dự án, rồi viết dockerfile
- sử dụng lệnh docker build để build Docker file đó và đóng gói dự án thành 1 cục gọi là Docker Image
- Cục docker image , chúng ta push lên Registry đay có the là Docker Hub, hoặc 1 nơi lưu trữ tự tạo riêng biệt.
Vì Docker Hub miễn phí sẽ giới hạn việc lưu trữ bí mật những Docker Image của bạn 
- vì docker image đóng gói dự án của bạn nên không thể công khai nó dc 
- Doanh nghiệp sẽ có các Registry riêng
- trên các server, muốn chạy dự án, kéo docker image từ Registry về và tiến hành
chạy container 



