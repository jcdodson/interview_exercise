FROM node:18-alpine

WORKDIR /app

ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA=$GIT_COMMIT_SHA

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 80

CMD ["node", "server.js"]
