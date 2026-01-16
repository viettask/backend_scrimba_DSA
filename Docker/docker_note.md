1. docker container run --publish 8080:80 --detach nginx:1.20.1

2. docker container --help

3. docker container ps

4. docker container ls

5. docker container stop

6. docker container run

7. Docker version

8. Docker info

9. Docker container ls -a

10. Container là 1 process chạy trên hệ điều hành,
    Process này dc giới hạn tài nguyên sử dụng trên OS (file, network, CPU, mem...)

    Container dừng và thoát như đóng process

11. 1 số câu lệnh kiểm tra
    docker run --name mongo -d mongo

    docker top mongo

    ps aux

    docker stop mongo

12. docker container run --name mongoserver1 -d mongo:latest
-d = --detach

13. docker container top mongoserver1
 lệnh top se liệt kê dc tat cả các process ID

14. chạy webserver nginx
    docker container run --publish 80:80 -d --name webserver2 nginx:1.20.1

15. Image và container có gì khác nhau
    Image là ứng dụng
    Container là process khi chạy ứng dụng đó
    có thể có nhiều container chạy từ cùng 1 image
    image dc lưu trên 1 kho chung gọi là registry