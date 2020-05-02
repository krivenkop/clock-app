FROM node:latest

RUN npm install -g webpack webpack-cli

WORKDIR /tmp
COPY package.json ./
RUN npm install

WORKDIR /app

RUN cp -a /tmp/node_modules /app
COPY webpack.config.js ./
COPY tsconfig.json ./
COPY docker/backend/run.sh ./