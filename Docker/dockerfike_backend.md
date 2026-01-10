1. Dự án Java springboot
cần 2 công cụ Java và Maven

2. Chọn Image đúng version dự án
Vd: dự án là Java8 , thì chọn image nào dựng từ Java 8
    Chọn image từ các nguồn official, verified, sponsored
    Chọn base image là alpine
=> Google : Maven Docker Image with Java 8 Alpine

3. kéo 1 server hệ điều hành Alpine đã cài Java 8 và Maven

4. 
## build stage ##
FROM maven:3.5.3-jdk-8-alpine as build

WORKIR /app
COPY . .
RUN mvn install -DskipTests=true

## run stage ##
FROM amazoncorretto:8u402-alpine-jre

COPY --from=build /app/target/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar /run/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT java -jar /run/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar


5. Google: Java docker image version 8

6. Khi docker file build thành công, kiểm tra bằng lệnh
docker images
sẽ thấy docker image shoeshop

7. docker ps -a

8. Khi đó chỉ cần push image này lên 1 Registry nào đó, vd DOcker Hub thì các server sẽ pull về và sử dụng

9. Nếu như bạn kg tin docker image nào ở bên thứ 3 cung cấp
thì bạn hoàn toàn có thể kéo 1 base image là alpine về 
cài JAVA lên đó và chạy dự án thông thường

10. Google: How to install java 8 on Alpine

11. copy 1 dockerfile ra dockerfile thứ 2
cp Dockerfile Dockerfile-v2
vi Dockerfile-v2

## build stage ##
FROM maven:3.5.3-jdk-8-alpine as build

WORKIR /app
COPY . .
RUN mvn install -DskipTests=true

## run stage ##
FROM alpine:3.19

RUN apk add openjdk8

WORKIR /run
COPY --from=build /app/target/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar /run/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT java -jar /run/shoe-ShoppingCart-0.0.1-SNAPSHOT.jar

12. Lưu file lại và
docker build -t shoeshop:v2 -f Dockerfile-v2 .

13. chạy lên 1 container 
docker run --name shoeshop-v2 -dp 9999:8080 shoeshop:v2

14. kiểm tra
docker ps -a
docker images

15. nâng cấp Dockerfile, thì tiến hành tạo ra version mới
cp Dockerfile-v2 Dockerfile-v3
vi Dockerfile-v3

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

16. Tiến hành build lại
docker build -t shoeshop:v3 -f Dockerfile-v3

17. Tiến hành kiểm tra và chạy lên 
docker images
docker run --name shoeshop-v3 -dp 7777:8080 shoeshop:v3

18. 
docker ps -a
docker logs shoeshop-v3
docker logs -f shoeshop-v3

14. lệnh có tác dụng để truy cập vào môi trường container chính là
docker exec -it shoeshop-v3 sh 
ls -l
ps -ef| grep shoe