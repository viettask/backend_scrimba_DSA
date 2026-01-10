1. Triển khai Registry Server
Tạo ra 1 private registry riêng biệt self-certified
Registry sẽ phải chạy bằng HTTPs
sẽ tạo ra private registry tự xác thực

cách này có ưu điểm khá giống với doanh nghiệp 

2. Cách cuối cùng là nên bỏ tiền ra 
để có tài nguyên VPS

mua 1 domain nào đó + thuê VPS => Tạo private Registry bằng Harbor

3. docker login
Login vào trong Docker Hub

4. Cách push lên Docker Hub
docker image = domain/project/repo:tag

5. docker tag todolist:v1 elroydevops/todolist:v1
docker images
docker push elroydevops/todolist:v1

6. Thử xoa todolist:v1
docker rmi elroydevops/todolist:v1
kéo về từ Docker Hub
docker pull elroydevops/todolist:v1

7. Nên tạo ra 1 server mới để tạo Private Registry


