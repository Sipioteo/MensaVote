FROM node:18 AS build

WORKDIR /

COPY . ./
RUN npm install
RUN npm run prepare
RUN npm run build

FROM nginx:1.23.4-alpine
COPY --from=build /public /usr/share/nginx/html
