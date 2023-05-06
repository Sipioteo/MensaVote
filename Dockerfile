FROM node:18 AS build

WORKDIR /

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run prepare
RUN npm run build

FROM nginx:1.23.4-alpine
COPY --from=build /public /usr/share/nginx/html
