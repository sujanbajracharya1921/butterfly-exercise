FROM node:latest as dev
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","run","dev"]