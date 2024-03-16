FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma migrate dev

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
