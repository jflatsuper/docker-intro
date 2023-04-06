FROM node:18-alpine
ENV NODE_ENV=development
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 
RUN npm install nodemon
COPY . .
# CMD ["node","server.js"]