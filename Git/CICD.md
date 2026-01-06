1. Tại sao CD/CD lại quan trọng?
   - tối ưu tài nguyên của công ty

    Nếu đi xin việc mà có thêm dòng
    đã từng triển khai CI/CD cho dự án thì đã nổi bật hơn các ứng viên khác


    - Trong doanh nghiệp, các bạn Dev sẽ code các dự án
    - các bạn devops, hay system sẽ lấy code để triển khai dự án

    - Với 1 hay 2 source thì chưa có vấn đề
    - nhưng trong doanh nghiệp thì 1 dự án thì có hàng chục source code.
    hay là 20 dự án trên Git thôi

    Vậy thì cần bao nhiêu system mới kịp thời triển khai dự án được.
    Mà quá trình phát triển dự án lại có 3 môi trường
    Development (Code hàng ngày, commit hàng giờ và update hàng phút, vậy mà phải chờ system triển khai xong thì mới có thể xem code mình đã chạy đúng chưa trên môi trường server, để còn đưa lên những môi trường quan trọng hơn)
    Staging 
    Production (End User)

    - Vì mình cũng đã nhiều năm làm Dev và cũng từng làm những doanh nghiệp chưa có 
    môi trường CI/CD, nên mình hiểu được khoảng thời gian chờ đợi triển khai đó dài thế nào?


    - Thêm nữa vì kg có CI/CD nên các bạn system khổ không kém , 
    bạn sẽ phải triển khai thủ công từng dự án một
    và công việc vô cùng tốn thời gian.
    Chưa kể là việc triển khai thủ công sẽ gặp sai lệnh (không tránh đc việc gõ lệnh sai)

    - Phải truy cập vào server, clone code, gõ lệnh build, gõ lệnh run, hay thực hiện các câu lệnh check log rồi kiểm tra (các bước chúng ta đã triển khai dự án trên Linux)

    - Do là series cho Freshers nên mình dành thời gian triển khai thủ công, và qua nhiều bước để mọi ng có kiến thức thực tế dễ hiểu , và dành rất nhiều thơi gian đê triển khai dự án. 

    - Ngoài triển khai hệ thống, thì còn cài đặt hệ thống, giám sát hệ thông, bảo trì và nâng cấp hệ thống.

    - CI/CD giúp mình nhàn hơn rất nhiều trong công việc triển khai.
    và giảm đi những lỗi lầm mà triển khai thủ công mang lại

    Có nghĩa là các bạn Dev chỉ cần code xong
    commit -> build -> test -> deploy
    là code mới dc triển khai ngay lên server mà chẳng cần sự can thiệp của con nguoi
    Hay cẩn thận hơn thi chỉ cần 1 vài click thì chức năng mới dc triển khai tự động chứ kg làm thủ công như truoc

2. CI / CD:
    Continuous Integration : bước clone code, build dự án rồi tích hợp các công cụ test dự án (test performance, test clean code, test bảo mật và kết hợp các test khác nữa ) để đảm bảo chất lượng source code 

    Continuous Deployment : triển khai hoàn toàn tự động, chính xác là bạn Dev chỉ cần 1 dòng commit code là chức năng mới dc triển khai mà kg cần thêm bước nào cả.

    Continuous Delivery: triển khai thủ công, chính xác là chúng ta cần bước xác nhận. 

    Cả Deployment và Delivery đều có điểm yếu và điểm mạnh riêng
    tự động hoàn toàn sẽ tối ưu về hiệu suất.
    thủ công 1 chút sẽ tăng khả năng kiểm soát hơn
    tuy nhiên thì ta hoàn toàn có thể tận dụng các điểm mạnh của tat cả chiến lược.
    để tạo ra 1 quy trình CI/CD tốt nhất cho doanh nghiệp

3. 2 công cụ để triển khai CI/CD 
    GitLab CI/CD
    Jerkins

    biết được điểm mạnh / yếu của công cụ và tại sao tôi dùng 
    Tuy nhiên có đc quy trinh CI/CD phù hợp không dễ dàng
    vì doanh nghiệp có to có nhỏ, ngoài nuoc và ngoài nước, có outsource có products. với rất nhiều cách phân loại khác.
     và chưa kể dự án dùng công cụ gì và làm sao tối ưu đc nó.

    có kiến thức thì tự tin hơn khi phỏng vấn về kiến thức của mảng này.
    Hay bạn đang làm trong doanh nghiệp, bạn hoàn toàn có thể phân tich dc quy mô của công ty và đưa ra những dề xuât phù hợp để đóng góp thay đổi văn hóa của cả doanh nghiệp
    và nâng cao giá trị của bản thân hơn trong nghành.

    




