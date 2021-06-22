FROM node:14-alpine as base

WORKDIR /app

FROM base as builder
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./
COPY ./.yarn/releases ./.yarn/releases
COPY ./.yarn/plugins ./.yarn/plugins
COPY ./.yarnrc.yml ./
COPY ./src ./src

RUN yarn install --immutable

COPY . .

RUN yarn build

FROM base as application
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["yarn", "start"]