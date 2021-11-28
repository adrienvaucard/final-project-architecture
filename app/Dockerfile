FROM node:14.18-alpine
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
ADD . /var/www/app
EXPOSE 4200
RUN npm install
CMD npm run start:prod