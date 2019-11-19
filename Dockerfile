FROM node:12-alpine as builder
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build:client
RUN npm run build:server
EXPOSE 3000
CMD ["node", "./dist/server/index.js"]