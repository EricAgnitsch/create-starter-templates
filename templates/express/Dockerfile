FROM node:lts-bullseye-slim as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

EXPOSE {{be_port}}8

CMD ["yarn", "start"]