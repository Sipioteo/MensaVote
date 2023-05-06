FROM node:18 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run prepare
RUN npm run build

FROM nginx:1.23.4-alpine
COPY --from=build /app/public /usr/share/nginx/html