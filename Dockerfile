FROM node:10-slim
WORKDIR /generals
COPY ./package.json /generals
RUN npm install
COPY . /generals
CMD ["npm", "run" , "start-production"]
EXPOSE 3000
