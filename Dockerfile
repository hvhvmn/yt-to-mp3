FROM node:18

RUN apt-get update && apt-get install -y ffmpeg python3 python3-pip
RUN pip3 install yt-dlp

WORKDIR /app
COPY . .

WORKDIR /app/backend
RUN npm install

WORKDIR /app

CMD ["node", "backend/server.js"]