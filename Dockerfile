FROM node

# set a directory for the app
WORKDIR /app

# install dependencies
#RUN npx create-next-app@latest

# tell the port number the container should expose
EXPOSE 3000

