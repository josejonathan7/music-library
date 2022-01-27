FROM node:16.13.2-alpine

RUN apk add dumb-init

WORKDIR /home/app

ENV NODE_ENV production

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY ./ ./

EXPOSE 3000

CMD ["dumb-init", "yarn", "dev"]
