1. vi Dockerfile

## build stage ## 
FROM node:18.18-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

## run stage ##
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]

2. lưu file lại rồi chạy 
docker build -t todolist:v1

3. docker run --name todolist-v1 -dp 6868:80 todolist:v1

4. Nếu chạy dự án React 
thì 
chỉ cần thay 
COPY --from=build /app/build /usr/share/nginx/html


