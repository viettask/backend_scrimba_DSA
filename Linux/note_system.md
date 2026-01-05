1. Tư duy triển khai mọi dự án
    Devops thì không tập trung vào code chức năng
    hay cài đặt các công cụ (system)

    Mục tiêu chính là triển khai được nhiều loại dự án thì càng giá trị
    Frontend: React, Angular hay Vue
    Backend:  Java, .Net, Php, Go lang, python
2. dự án nào thì Công cụ tương ứng

3. Phiên bản thì của công cụ thì phải lớn hơn hoặc bằng yêu cầu của dự án
    Vd: nếu yêu cầu Node16 mà cài Node12 sẽ bị lỗi

4. Trong bất cứ dự án nào đều chia làm 3 files chính
    1. File chức năng: 
        file code thực hiện chức năng như thêm giỏ hàng, hay tạo user. 
        các file này thì làm devops chưa cần quan tâm

    2. File cấu hình:
        chứa các file kết nối tới database
        dự án sẽ chạy port nào 
        và nhưng kết nối đến các dự án khác
        => đây chính là những file mà devops cần quan tâm

    3. File khác Vd: README.md
    file mô tả hệ thống
    cũng chưa cần quan tâm đến

5. Bước triển khai
    Build : chạy 1 câu lênh nào đó để build ra 1 thư mục hay file nào đó. Và file hay thư mục đó dùng để chạy lên
    Run

6. (Summary) Cách triển khai dự án
    1. công cụ là gì?
    2. File cấu hình ở đâu?
    3. Làm sao build?
    4. Run thế nào?
Có thể triển khai được mọi dự án

7. Chú ý: 
    Mỗi dự án thì có thư mục làm việc riêng và ng dùng user riêng cho dự án
    Không thể dùng user root rồi chạy cho mọi dự án
    user root là có quyền cao nhất trong hệ thống
    khi dùng user root để chạy cho dự án thì khi hệ thống bị xâm nhập và chiếm quyền thì nguy hiểm cho cả hệ thống đo.
    vì hacker có rất nhiều cách để khai thác hệ thống của bạn
    vì họ đã chiếm được ng dùng có quyền khai thác trên mọi hệ thống

    Phải tạo ra 1 user khác(nên cùng tên với dự án) và chỉ có quyền làm trong 1 dự án, hé thống, folder đó
     
