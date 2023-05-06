FROM node:18-alpine AS build

WORKDIR /
COPY . .
RUN npm install
RUN npm run prepare
RUN npm run build

FROM nginx:1.23.3-alpine-slim AS deploy-static

WORKDIR /usr/share/nginx/html
COPY --from=build /build-static .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:18 AS deploy-node

WORKDIR /
COPY --from=build /package.json .
COPY --from=build /build-node .
RUN npm install --production
CMD ["node", "index.js"]