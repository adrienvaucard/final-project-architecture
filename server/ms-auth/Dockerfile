FROM node:14.18-alpine
RUN mkdir -p /var/www/server/ms-auth
WORKDIR /var/www/server/ms-auth
ADD . /var/www/server/ms-auth
RUN npm install
CMD npm run start:dev