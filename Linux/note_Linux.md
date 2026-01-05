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

21. VIM trong Linux để chỉnh sửa văn bản
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

23. xem trạng thái sử dụng RAM trên server
    free -m

24. xem server còn trống bao nhieu Gb
    df -h /

25. giống sử dụng task manager trên wins
    top

26. Muốn đổi tên của server
    Ex: sudo hostnamectl set-hostname lab-server( tên mới)

    Để mà áp dụng, thì phải khởi động lại server mới tiến hành được quá trình này

27. Câu lệnh để khởi động lại server
    reboot

28. netstat -tlpun
    -t : hiển thị thông tin về các kết nối tcp
    -l : hiển thị các cổng đang mở và lắng nghe để kết nối
    -p : hiển thị tiến trình và chương trình liên quan đến mối kết nối
    -u : hiển thị thông tin về các kết nối udp
    -n : hiển thị địa chỉ IP và công dạng số chứ khong phải tên miền hay tên cổng

    netstat cần phải cài đặt
    apt install net-tools

29. Xem các tiến trình đang chạy trên hệ thống
    ps -ef

30. Kiểm tra kết nối internet
    ping 8.8.8.8 (ping thằng đến Google)

31. Kiểm tra server này có thông kết nối với 1 server khác
    telnet 192.1.199 80

32. Khi bạn biết server đó có tồn tại, nhưng telnet khong thành công
    Để cài đặt tracerout
    apt install tracerout -y

    -y để không bị hỏi lại

    tracerout -T -p 80 192.168.1.199

33. Để cài đạt các công cụ trong hệ thống
    apt

    Để xóa công cụ
    apt remove <tên-công-cụ>

34. Quyền truy cập trên Linux
    1. Chủ sở hữu
    2. Nhóm sở hữu
    3. Nhóm khác
    4. Quyền tác động

35. Users và root
    Tạo và quản lý các đối tượng tác động lên server của bạn
    phải có quyền sudo hay user root 

    tạo users trên hệ thống:
    useradd manhnv1 : tạo ra user không tạo ra các phần các

    adduser manhnv2 : tạo ra user, password và group 

    Đăng nhập vào user:
    su manhnv1 

36. xem thông tin của users
    vi /etc/passwd

37. xóa user 
    deluser manhnv1

37. Tạo 1 group
    groupadd devops1
    groupadd devops2

38. Xóa group
    delgroup devops1

39. Thêm 1 user vào group
    usermod -aG devops2 manhnv2

    -a là append thêm vào
    -G là liệt kê danh sách các group của manhnv2
    nếu mà kg dùng -G thì sẽ thêm manhnv2 vào devops2,và hệ thống sẽ xóa bỏ các group mà manhnv2 có trước đó.

40. Kiểm tra group của 1 user
    groups manhnv2

    Trên Linux thì khi tạo ra 1 user mới , sẽ tạo ra 1 group có tên tuong ứng của user đó, và thêm user đó, vào group đó

41. xóa user khỏi group
    deluser manhnv2 devops2

42. Phân quyền: 
    Quyền truy cập 
    Quyền sở hữu

43. Muốn đổi chủ sở hữu và nhóm sở hữu
    chown root:devops2 datas
    chown <chủ sở hữu>:<group sở hưu> <tên file>

    chown -R 
    -R là thay đổi folder cha lên tất cả files con

44. Quyền truy cập
    Linux có 3 quyền chính
    Read - Write - Execute
    rwx

45. Thay đổi quyền tác động
    ugo : user group other(nhóm ng khác không liên quan)
    
    Muốn thay đổi quyền Write cho nhóm sở hữu
    chmod g=rwx datas/

    Muốn thay đổi quyền của 3 đối tượng cùng lúc
    chmod u=rwx,g=rx,o=- datas/
    other không cho quyền gì

    Trong Linux để mà tác động vào 1 file thì bạn phải có quyền thực thi, x

46. Phân quyền tác động bằng số
    r = 4
    w = 2
    x = 1
    full quyền = 4 + 2 + 1 = 7

    chmod 750 datas/