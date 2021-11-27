FROM node:14.18-alpine
RUN mkdir -p /var/www/server/ms-client
WORKDIR /var/www/server/ms-client
ADD . /var/www/server/ms-client
RUN npm install
CMD npm run start:dev