FROM node:14-alpine

COPY ./front /home/node/app/front/

WORKDIR /home/node/app/front/

RUN yarn install
RUN yarn run build

COPY ./front-server /home/node/app/front-server/

WORKDIR /home/node/app/front-server/

RUN cp -r /home/node/app/front/build/ /home/node/app/front-server/staticfiles
RUN yarn install