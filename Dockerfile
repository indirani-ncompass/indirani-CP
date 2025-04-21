FROM node 

WORKDIR /app1

COPY . /app1

RUN npm install

EXPOSE 4000
CMD [ "node","src/app.js" ]

