FROM node:latest

WORKDIR /src

ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install

ADD . /src

ENTRYPOINT npm start