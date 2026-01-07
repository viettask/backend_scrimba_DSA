1. google GitLab CI/CD syntax/keyword
    chú ý keyword when manual

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
        when: manual
        script:
            - >
                if ["$GITLAB_USER_LOGIN" == "manhnv"]
                    sudo cp target/$projectname-$version.jar $projectpath
                    sudo chown $projectuser. $projectpath
                    sudo su $projectuser -c "kill -9 $(ps -ef| grep shoe-ShoppingCart-0.0.1-SNAPSHOT.jar | grep -v grep | awk '{print $2}')"
                    sudo su $projectuser .c "cd $projectpath; nohup java -jar $projectname-$version.jar > nohup.out 2>&1 &"
                else
                    echo "Permission denied"
                    exit 1
                fi
        tags:
            - lab-server
    showlog:
        stage: showlog
        variables:
            GIT_STRATEGY: none
        when: manual
        script:
            - sleep 20
            - sudo su $projectuser .c "cd $projectpath; tail -n 10000 nohup.out"
            - 
        tags:
            - lab-server


sau đó commit config(pipeline): change the project deployment strategy from CDeployment to CDelivery

tương tự, để chạy dc thì phải tạo Tag
Mục đích làm Manual như vậy là để ng nào có đủ quyền để xác nhận

Vd muốn deploy lên các môi trường cao hơn thi phải quét qua các công cụ bảo mật
hoặc là clean code
Hoặc là có 1 ng approve thì mới dc triển khai lên các môi trường cao hơn

google GitLab CI variables list/references

