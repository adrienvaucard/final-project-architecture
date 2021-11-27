FROM node:14.18-alpine
RUN mkdir -p /var/www/server/ms-stat
WORKDIR /var/www/server/ms-stat
ADD . /var/www/server/ms-stat
RUN npm install
CMD npm run start:dev