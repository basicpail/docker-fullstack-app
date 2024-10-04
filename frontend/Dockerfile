FROM node:20-alpine as builder
WORKDIR /home/ssg/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

#EXPOSE 3000 컨테이너가 3000번 포트를 listen 하게 한다.
FROM nginx
# EXPOSE 3000
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/ssg/app/build /usr/share/nginx/html
#--from=builder 무슨 뜻?