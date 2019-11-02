# Stage 1
FROM node:alpine AS build-stage

WORKDIR /app

COPY . ./

RUN npm install

RUN npm run build

FROM nginx:1.15

COPY --from=build-stage /app/build/ C:\nginx-1.16.1\html

# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf