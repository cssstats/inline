FROM node:boron

RUN apt-get update &&\
    apt-get install -y libgtk2.0-0 libgconf-2-4 \
    libasound2 libxtst6 libxss1 libnss3 xvfb

EXPOSE 3000

WORKDIR /app

RUN npm install nightmare
COPY index.js .
COPY package.json .
RUN npm i

COPY entrypoint /
RUN chmod +x /entrypoint
ENTRYPOINT ["/entrypoint"]

CMD npm start
