FROM node:alpine

RUN mkdir /webapp
COPY . /webapp

COPY package.json /webapp/package.json
RUN cd /webapp; yarn install

COPY . /webapp

EXPOSE 3000

WORKDIR /webapp