1. các bước cần triển khai
    truy cập server
    kéo code
    build
    run 
    check log

2. Có 2 bước 

    1. cài 1 công cụ nào đó như 1 robot 
    Cài đặt công cụ tự động:
    là cài con robot vào server và kết nối nó vào GitLab
    robot đó là GitLab runner

    2. và chúng ta sẽ viết kịch bản để nó thực hiện
    Viết file cấu hình công việc
    kịch bản đó dc viết trực tiếp trong dự án của bạn
    tên file là .gitlab-ci.yaml (là file có định dạng key và value)

3. Cài GitLab Runner
    Google how to install GitLab runner on ubuntu
    elroydevops.tech/setup-gitlab-cicd-pipeline-private-registry/

    Cài GitLab runner trên ubuntu server, not GitLab server
    apt-get update
    curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
    apt-get install gitlab-runner
    apt-cache madison gitlab-runner
    gitlab-runner -version

    vậy là đã cài đặt thành công 


4. Kiểm tra user của gitlab-runner
    vi /etc/passwd

    user là gitlab-runner
    thư mục làm việc là /home/gitlab-runner

5. Bước kế tiếp, kết nối Gitlab runner với dự án trên GitLab server self host
    vào GitLab => CI/CD -> Runners (expand)

    Quay trở lại với ubuntu-server, 
    gitlab-runner register

    Enter the GitLab instance URL: http://git.viettask.com
    Enter the registration token: 
    Enter a description for the runner: lab-sever hay ubuntu-server (nên đặt cùng tên với server, vì xác định dc runner đó của server nào)
    Enter tags for the runner: lab-server
    Enter optional maintenance note for the runner: (bỏ qua đc)

    có 3 executor cần chú ý: kubernetes, docker, shell

    Configuration (with the authentication token) was saved in "/etc/gitlab-runner/config.toml"

    mở file
    vi /etc/gitlab-runner/config.toml

    concurrent = 4 (có nghĩa là con runner này chạy dc đồng thời 4 dự án)

    chạy con robot này lên
    nohup gitlab-runner run --working-directory /home/gitlab-runner
                        chỉ định thư mục làm việc là /home/gitlab-runner
                    --config /etc/gitlab-runner/config.toml
                    --service gitlab-runner
                    --user gitlab-runner
                    2>&1 &
     
    khi đó mình sẽ có thêm file nohup.out 

    ps -ef| grep gitlab-runner

    Quay lại kiểm tra git.viettask.com
    đã có 1 runner là lab-server

    tiến hành bấm vào setting

    1 số lưu ý phải biết
    tùy chọn Active : nếu untick paused runners don't accept new jobs
    thì runner sẽ không online

    nếu tick protected thì nhánh nào đc bảo vệ mới đc chạy thôi 
    thì chỉ có các branch được bảo vệ develop, main và stagging 
    Thường thì cũng kg cần tick chọn vào

    Run untagged jobs
    khi tick chọn indicates whether this runner can pick jobs without tags
    không cần chỉ định chính xác 1 con runner nào đấy
    Khi tick chọn thì kg cần gọi tên hay xác định runner nào sẽ chạy dự án


    Lock to current projects: 
    Khi tick chọn when a runner is locked.
    it cannot be assigned to other projects
    thì các dự án khác sẽ không sử dụng đc runner này
    Nên bỏ tick tùy chọn này
    vi 1 con runner như vậy , sẽ giúp chung ta chạy trên nhiều dự án

6. Viết kịch bản
    tạo file
    .gitlab-ci.yml (có nhiều template nhưng chúng ta kg cần sử dụng đến)

    variables:
        projectname: shoe-ShoppingCart
        version: 0.0.1-SNAPSHOT
        projectuser: shoeshop
        projectpath: /datas/$projectuser/

    stages:
        - build
        - deploy
        - showlog

    build:
        stage: build
        variables:
            GIT_STRATEGY: clone
        script:
            - mvn install -DskipTests=true
        tags:
            - lab-server
        only:
            - tags
    deploy:
        stage: deploy
        variables:
            GIT_STRATEGY: none
        script:
            - sudo cp target/$projectname-$version.jar $projectpath
            - sudo chown $projectuser. $projectpath
            - sudo su $projectuser -c "kill -9 $(ps -ef| grep shoe-ShoppingCart-0.0.1-SNAPSHOT.jar | grep -v grep | awk '{print $2}')"
            - sudo su $projectuser .c "cd $projectpath; nohup java -jar $projectname-$version.jar > nohup.out 2>&1 &"
        tags:
            - lab-server
    showlog:
        stage: showlog
        variables:
            GIT_STRATEGY: none
        script:
            - sleep 20
            - sudo su $projectuser .c "cd $projectpath; tail -n 10000 nohup.out"
            - 
        tags:
            - lab-server


    sau đó commit config(pipeline): add build stage
                    config(pipeline): add runner
                    config(pipeline): add deploy stage
                    config(pipeline): change strategy runner
                    config(pipeline): add script deploy stage
                    config(pipeline): update config

    Sau đó bấm vào CI/CD -> Pipelines

