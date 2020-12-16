# Use an official Node runtime as a base image
FROM node
WORKDIR /nodeimage

# We are first copying the package.json and install the required dependencies
COPY package.json /nodeimage
RUN npm install
COPY . /nodeimage
EXPOSE 8080

CMD ["node", "app.js"]
