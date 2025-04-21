FROM node 


WORKDIR /app1


COPY . /app1


RUN npm install


CMD [ "node","src/app.js" ]

