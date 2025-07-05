FROM node:22.17-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git
RUN git clone https://github.com/jbristhuille/cv.git .

RUN npm install
RUN npm run build -- --configuration production

FROM nginx:alpine

COPY --from=builder /app/dist/cv/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
