FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run prepare
RUN npm run build
CMD ["npm", "run", "start"]