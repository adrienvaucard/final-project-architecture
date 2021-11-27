FROM node:14.18-alpine
RUN mkdir -p /var/www/server/ms-game
WORKDIR /var/www/server/ms-game
ADD . /var/www/server/ms-game
RUN npm install
CMD npm run start:dev