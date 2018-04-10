
FROM node:alpine

WORKDIR /app
ADD . /app

RUN npm install


EXPOSE 8080

RUN node -v

ENTRYPOINT [ "node", "index.js" ]
