# Stage 1
FROM node:12-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.16.0-alpine

COPY --from=node /usr/src/app/dist/admin-panel /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf