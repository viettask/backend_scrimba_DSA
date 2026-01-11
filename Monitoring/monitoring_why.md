1. Làm sao để giám sát các tài nguyên hạ tầng trong doanh nghiệp

chỉ cần service có vấn đề mà kg tìm cách khắc phục sẽ đem lại thất thoát thế nào
Vd những hệ thống ecommerce , dù hệ thống chậm bị treo vài phút
cung ảnh huong đến trải nghiệm ng dùng
và uy tín của doanh nghiệp


2. Monitoring ra đời để đảm bảo rằng 
Tự động giám sát các server khi mà server bị lỗi như 
đầy RAM,
đầy bộ nhớ, 
cache CPU,
mạng chậm....

Tùy theo thiết lập mà ta đưa ra sẽ có những cảnh báo phù hợp 
 

Hiện giờ chỉ cần sử dung 1 cong cụ phù hợp thì sẽ đảm bảo hệ thống giám sát sẽ cảnh báo ngay cho chúng ta trước khi các tài nguyên sẽ có những vấn đề nặng hơn

Chúng ta thiết lập server ở mức độ khả dung kg nghiêm trọng
rồi hệ thống giám sát sẽ cảnh báo luôn
hay 
thiết lập mức CPU chỉ cần tăng đến 80%
sẽ tiến hành cảnh báo


Vậy khi trước khi các trường hợp tệ hơn xảy ra
chung ta đã hoàn toàn nắm dc tình hình
và đưa ra các phương án khắc phục

Ngoài ra thì ta có thể monitoring database
xem câu truy vấn nào làm cho hệ thống bị chậm để yêu cầu bên phát triển khắc phục
số lượng kết nối có vượt ngưỡng hay kg
Rồi rất nhiều lợi ich khác giúp bạn dc nhàn hơn

3. Chúng ta có rat nhieu cong cụ mã nguồn mở miễn phí để
monitoring và log

4. Zabbix vừa dễ vừa khó dùng
tuy nhiên thì ưu điểm nhiều hơn
có nhiều template sẵn để quản trị giam sát hệ thống của bạn 

bạn k can biet qua chuyên sâu nhưng vẫn đảm bảo việc
khi server lỗi, service lỗi 
cao RAM, cao CPU, mạng chậm
database chậm đều sẽ có cảnh báo
và bạn chỉ cần 1 số thao tác điều chỉnh thong số để phu hop với doanh nghiệp của mình

Công cụ này có tich hop nhieu nen tảng giao tiep như 
Telegram
Email..
và hoàn toàn có thể cấu hình thông báo de nhanh chóng nắm dc tình hình
thâm chí Zabbix còn mạnh mẽ hơn khi tich hop cảnh báo tùy theo mức độ nghiêm trọng

nếu doanh nghiệp của bạn đề cao su on dinh của he thong
thì viec thiet lap 1 màn hình và 1 loa cảnh báo riegn cho Zabbix
sẽ thực su dam bảo cho hệ thong chạy tot hon rat là nhieu 

bởi vì khi service nào có vấn đề 
thì chuông cảnh báo se keu lên kèm với
trạng thái của service đó

Zabbix mạnh mẽ và đa dạng nên bạn cần thơi gian de tim hieu thêm
như Zabbix có bieu dien các thong số dạng biểu đồ
hay lưu lại lich sử service
