FROM node:lts-bullseye-slim as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

EXPOSE 8100

CMD ["yarn", "start"]