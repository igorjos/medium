# base image
FROM node:12.7-alpine

#environment that should be used for ng build
ARG envr 
#port on which nodejs will serve
ARG port
#host/ip on which nodejs will serve
ARG host
#angular cli version
ARG angular

ENV PORT=$port
ENV HOST=$host

#temporary dir for building angular 
WORKDIR /tmp

#copy all project related files into tmp folder
COPY . /tmp

#open tmp folder to install node_modules inside of it
RUN cd /tmp

#run global angular-cli installation and local project node_modules installation
RUN npm install -g @angular/cli@${angular} --quiet && npm install

#run angular build with custom configuration e.g development, test, stage, production etc.
#and copy nodejs server.js file (that will run nodejs with express static server) into dist folder
RUN ng build --configuration=${envr} && cp server.js dist/

#copy only dist to new app folder
RUN cp -r dist/ /app

#copy nodejs related package.json to app folder
COPY package2.json /app/package.json

WORKDIR /app
#remove project folder -- keep only build folder
RUN rm -r /tmp

#install all dependencies needed for nodejs server and remove global installation of angular, since it is not needed anymore
RUN npm install && npm uninstall -g @angular/cli@${angular} --quiet

#this line is just for debug purposes, to see that you have correct folder/file structure in the app folder, you can remove it
RUN ls

#expose docker image port
EXPOSE ${port}

#run static nodejs server
CMD node server.js
