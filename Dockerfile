# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm ci

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:alpine3.17

COPY --from=build /usr/local/app/sshd_config /etc/ssh/
COPY --from=build /usr/local/app/docker-entrypoint.sh ./

# Start and enable SSH
RUN apk add openssh \
    && echo "root:Docker!" | chpasswd \
    && chmod +x ./docker-entrypoint.sh \
    && cd /etc/ssh/ \
    && ssh-keygen -A

RUN echo 'server { listen 8083; server_name  _; root   /usr/share/nginx/html; try_files $uri $uri/ /index.html =404;} '>/etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist /usr/share/nginx/html
# Expose port 8083 2222
EXPOSE 8083 2222

USER root

ENTRYPOINT [ "./docker-entrypoint.sh" ]