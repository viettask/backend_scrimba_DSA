1. ubuntu-server
IP address: 192.168.139.128

2. ssh viettask@192.168.139.128

3. pwd: vị trí hiện tại mình đang đứng là ở đâu

4. whoami: cho biết là đang đăng nhập vào trong phiên với user nào?

5. cd: di chuyển giữa các thư mục

google linux system files xem quản lý thư mục trong Linux

    cd ..  :di chuyển về thư mục cha
    cd     :di chuyển về thư mục ban đầu

6. ls: xem nội dung trong thư mục
    ls -l : -l là viết tắt của list 
    ls -a : -a là hiển thị những thư mục ẩn
    ls -t : -t là viết tắt của time, sắp xếp nội dung của thư mục đó, từ mới nhất đến cũ nhất

    có thể gộp 
    ls -lta: hiến thị toàn bộ files, và thư mục dưới dạng list và sắp xếp nó mới đến cũ

7. mkdir : tạo thư mục

8. cùng 1 lúc tạo nhiều thư mục
    mkdir -p data/data1/data11

9. touch :  tạo ra 1 file trên linux
    Ex: touch data/data.txt

10. rm : xóa file và thư mục
    Ex: rm data/data.txt

    rm -rf : xóa file và không bị hỏi lại

11. cp : copy 
    Ex: cp data/ /tmp/
    hay là 
    cp -r data/ /tmp/: copy folder

    Ex: cp data.txt /tmp/

12. mv : di chuyển file
    Ex: mv /tmp/data.txt data.txt

13. echo : in nội dung rà màn hình, hay xem nội dung của biến nào đó
    Ex: echo "devops for fresher by elroydevops" chỉ ra câu y chang như vậy

    echo "devops for fresher by elroydevops" > title.txt
    ghi đè nội dung vào trong file 

14. cat : xem nội dung vào trong file
    Ex: cat title.txt

15. ghi tiếp nội dung trong file
    echo "devops for fresher by elroydevops 2" >> title.txt

16. history : xem lại những câu lênh mình đã từng gõ

17. tail -n 1 title.txt
chỉ xem lại 1 dòng cuối cùng trong file

18. tail -n 1 title.txt > log.txt
lấy dòng cuối cùng ghi vào file log.txt
    cat log.txt

19. tail -f log.txt : -f là follow

20. sudo : sử dụng câu lệnh này với quyền admin
    sudo -i là chuyên sang user root

21. VIM trong Linux
    cài đặt VIM: apt install vim -y : -y là hệ thống cài luôn 1 mạch mà không xác nhận lại
    
    sudo apt install vim -y

22. tạo ra 1 file và mở nó lên
    vi data.txt

    bấm i vào chế độ Insert
    bấm esc : thoát chế độ insert mode vô chế độ command mode

    gõ 2 lần phím d để xóa 1 dòng
    ctrl + z (wins) = u
    gõ 2 lần phím y để copy
    gõ phím p để paste
    tìm /
    lưu nội dung và thoát :x
    chỉnh sửa mà không muốn lưu :q!
