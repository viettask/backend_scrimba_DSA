1. Tích hợp chạy dự án Docker với CI/CD

Bây giờ tiến hành config dự án trên nhánh staging đẻ chạy container
Sẽ tiến hành merge code từ Develop sang Staging

tạo 1 request to merge code từ develop sang staging

2. quay trở lại GitLab-server
    su gitlab-runner
    docker ps 

    Thêm gitlab-runner và group docker
    usermode -aG docker gitlab-runner
    su gitlab-runner 

    docker ps 
bây giơ gitlab-runner đã đủ quyền tác động đến docker

Bây giờ viết lại file config 

tiến hành thêm dockerfile trong staging
    exit

    cat /data/shoeshop/Dockerfile-v3

giờ phải kiểm tra chính xác xem file Pom có đúng tên kg
    copy nội dung dockerfile trước đó

## build stage ##
FROM maven:3.5.3-jdk-8-alpine as build

WORKIR /app
COPY . .
RUN mvn install -DskipTests=true

## run stage ##
FROM alpine:3.19

RUN adduser -D shoeshop

RUN apk add openjdk8

WORKIR /run
COPY --from=build /app/target/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar /run/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar

RUN chown -R shoeshop:shoeshop /run

USER shoeshop

EXPOSE 8080

ENTRYPOINT java -jar /run/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar

    commit message: config(Dockerfile): Add Dockerfile

3. Chỉnh lại file .gitlab-ci.yml

    variables:
        #domain/project-registry/project-gitlab:tag_commit
        # registry.elroydevops.online/elroy/shoeshop:v0.0.10_324kj34
        DOCKER_IMAGE: ${REGISTRY_URL}/${REGISTRY_PROJECT}/${CI_PROJECT_NAME}:${CI_COMMIT_TAG}_${CI_COMMIT_SHORT_SHA}
        DOCKER_CONTAINER: ${CI_PROJECT_NAME}
    stages:
        - buildandpush
        - deploy
        - showlog

    build:
        stage: buildandpush
        variables:
            GIT_STRATEGY: clone
        before script:
            - docker login ${REGISTRY_URL} -u ${REGISTRY_USER} -p ${REGISTRY_PASSWORD}
        script:
            - docker build -t $DOCKER_IMAGE .
            - docker push $DOCKER_IMAGE
        tags:
            - lab-server
        only:
            - tags
            
    deploy:
        stage: deploy
        variables:
            GIT_STRATEGY: none
        before script:
            - docker login ${REGISTRY_URL} -u ${REGISTRY_USER} -p ${REGISTRY_PASSWORD}
        script:
            - docker pull $DOCKER_IMAGE
            - docker rm -f $DOCKER_CONTAINER
            - docker run --name $DOCKER_CONTAINER -dp 8080:8080 $DOCKER_IMAGE
        tags:
            - lab-server

    showlog:
        stage: showlog
        variables:
            GIT_STRATEGY: none
        script:
            - sleep 20
            - docker logs $DOCKER_CONTAINER
        tags:
            - lab-server

Tạo tag stag_0.0.1 


4. Tạo ra 3 variables cho CI/CD
REGISTRY_PASSWORD
REGISTRY_PROJECT
REGISTRY_URL
REGISTRY_USER

5. Google GitLab runner variable list


