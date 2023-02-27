FROM node:15-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm config set cache /tmp --global

ENV PORT=4002

EXPOSE 4002