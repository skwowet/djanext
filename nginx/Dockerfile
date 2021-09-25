FROM nginx:stable-alpine

# removes default ngnix config
RUN rm /etc/nginx/conf.d/default.conf

# copies our custom nginx config
ADD ./nginx.conf /etc/nginx/conf.d/nginx.conf
