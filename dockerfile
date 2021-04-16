FROM node:14-alpine

WORKDIR /home/node/app/backend/

COPY ./backend/package*.json ./
RUN yarn install

COPY ./backend/ .

CMD [ "yarn", "start" ]