FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# On copie UNIQUEMENT le site
COPY src/ /usr/share/nginx/html/

EXPOSE 80
