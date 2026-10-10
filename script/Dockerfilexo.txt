FROM node:20-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm install --omit=dev

COPY app/src ./src

EXPOSE 5000

CMD ["npm", "start"]
