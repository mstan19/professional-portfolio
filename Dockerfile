FROM node:current-alpine3.23

WORKDIR /usr/src/app

COPY package*.json ./
COPY public ./public
COPY src ./src
COPY tailwind.config.js ./

RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "start" ]