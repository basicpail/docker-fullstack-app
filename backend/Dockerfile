FROM node:20-alpine

WORKDIR /ssg/home/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "run", "dev"]