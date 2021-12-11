# Build stage
FROM node:16-alpine3.12 as build-stage
WORKDIR /app
COPY package.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn build

# Run stage
FROM nginx:latest
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/infrastructure/nginx.conf /etc/nginx/conf.d/default.conf