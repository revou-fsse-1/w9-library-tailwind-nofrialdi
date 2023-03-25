FROM node:19.3.0-alpine3.17

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3003

CMD ["node","index.js"]

