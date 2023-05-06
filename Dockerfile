FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run prepare
RUN npm run build

FROM node:18-alpine AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build-node .
CMD ["node", "index.js"]