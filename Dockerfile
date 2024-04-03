FROM node:18.20.0-alpine as build

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html