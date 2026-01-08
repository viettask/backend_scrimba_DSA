1. Tư duy viết dockerfile

2. dockerfile commands
    
    FROM node:20
    1 image node:20 đã tồn tại

    WORKDIR /app
    chỉ định thư mục làm việc, sau khi đã kéo source về container,
    nếu thư mục app chưa có thì nó cũng sẽ tự tạo cho chúng ta

    COPY 
    copy source vào container
    VD: COPY.. (. là vị tri hiện tại của dockerfile, . là vị trí hiện tại trong container là dc chỉ định trong WORKIR)

    RUN

    ENV 
    khai báo biến

    EXPOSE 80
    lệnh định nghĩa ứng dụng trong container sẽ chạy ở port nào?

    CMD 
    thường dc dùng để xác định lệnh và giá trị mặt đinh 

    ENTRYPOINT 
    thường dc sử dụng khi bạn muốn giữ nguyên 1 lệnh cố định,
    cho phép lệnh dc chỉ định khi chạy container thêm vào cuối của nó

3. Tư duy viết Dockerfile dc tối ưu - bảo mật hơn
    1. chạy ứng dung bằng user khác non root user
    2. chọn base image phù hợp
    Vd: nếu bạn chạy Java8, thì bạn cũng nên cài Maven Java8 để build và run dự án,
    giúp bạn tối ưu dung lượng docker image build ra
    và giúp hạn chế những công cụ kg cần thiết khiến cho docker image bị nặng hơn

    Chọn những docker image nào nhẹ và tối ưu, chọn image uy tín
    (visual, verified, sponsor)
    3. dùng công cụ quét docker image
    kiểm tra xem docker image có những lỗ hổng gì và ta có chấp nhận dc điều đó kg

    4. Multiple stage
    giúp giảm kích thước docker image thực tế cuối cùng , khi dc build ra

4. Dockerfile: A recipe for your image
    FROM node:22-alpine                    //USe a lightweight Node runtime as the base
    WORKDIR /app                           // Set the working directory to /app
    COPY package*.json ./                  // copy over the package.json
    RUN npm ci                              // install dependencies cleanly
    COPY . .                               // copy app's code to the container
    CMD ["node", "server.js"]              // specify how to start the app

5. .dockerignore
    tells docker which files witthout copying into the project

    node_modules
    .git
    .env
    dist
    Coverage

6. build docker image
    docker build -t posty:v1 .
    enter and see

    docker images 
    to verify what we got

7. run
    docker run -p 3000:3000 posty:v1
               -p <HOST_PORT>:<CONTAINER_PORT>

9. Docker Hub
    Docker Hub, the Registry where images are stored and shared.

    Now to push our own image to Docker Hub, 

    docker login
    docker build -t posty:v1 . 
    docker tag posty:v1 <your-docker-username>/posty:v1
    docker push tomchant586/posty:v1
    docker pull tomchant586/posty:v1

10. Development workflows & data persistence
    Posty running in a container
    when coming to developing and testing app 
    which are running in containers,
    
    2 problems
    1. problem comes during the development process
    changes to code do not manifest in the container

    Workflow would be easier if code changes made locally were automatically applied to our container
    2. Problems come about when we add data
    Ex: we're testing the functionality because user created data
    such as blog posts do not persist.

11. Named volume
    any data added by the user
    or importantly data added by the developer to test functionality

    Now I should mention here that you could use the bind mount method
    that we saw in the previous scrim to persist this user data

    We want to separate our code from the data

    When we made code updates
    adding new features and style
    that's an integral part of our app
    => We want to pushing the GitHub repos

    But the user data (blog posts, database data)
    That we dont really want polluting our repos
    But on the other hand, we might well want to persist some user added data
    so you can use with different version of your app.

    We can spin up multiple containers from one image
    but we can also have multiple versions of our images
    So it might well be that you want to add some user data, test it in one version of 
    your app and then test it in another version of your app.

    So persisting this user data is desirable in some cases.
    but we dont want to add it to our main code base

    => A Name Volume is place to store production data like databases
    and uploaded files. It exists locally but is managed by Docker

    docker volume create blog-posts
                        <the name of named volume>
                    
    docker run --name posty-persist -p 3000:3000 --mount type=volume, source=blog-posts,target=/app/posts posty:v2 

    docker stop posty-persist
    docker rm posty-persist

    docker run --name posty-persist2 -p 3000:3000 --mount type=volume, source=blog-posts,target=/app/posts posty:v2 

    Named Volumes are completely independent of any specific image or container and can be mounted to as many containers you want

    Named Volumes are great for
        Persisting data across container re-creations
        Sharing data between different containers
        backing up data independently of containers
        migrating data between different versions of an application

12. Bind Mount
    A bind mount connects a folder on your machine directly to a path in a container

    When we make any changes in our code editor locally
    those changes are gonna instantly be available inside the container 

    docker run --name posty-app -p 3000:3000 --mount type=bind, source="$(pwd)" target=/app posty:v2

    For wins powershell    
    docker run --name posty-app -p 3000:3000 --mount type=bind, source="${PWD}" target=/app posty:v2

    docker stop posty-app
    docker start posty-app

    Why Bind Mount is great for Dev
        You can edit directly with your local tools (IDE)
        Changes are instantly reflected in the container without rebuilding
        Easy to do version control (your code is already in your local Git repo)

13. Docker Compose
    Docker Compose does it... with one simple config file.
    docker-compose.yml


    services: 

    backend:
        build: ./backend
        ports: 
         - "8000:8000"

    frontend:
        build: ./frontend
        ports: 
         - "3000:3000"
        environment: 
         - BACKEND_URL=http://backend:8000
        depends_on:
         - backend

Challenge:
 Change "localhost" for the correct service name in this file and in frontend server.js.
