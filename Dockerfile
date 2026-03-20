FROM node:18

RUN apt-get update && apt-get install -y ffmpeg python3 python3-pip python3-venv

# Virtual environment bana
RUN python3 -m venv /opt/venv

# Activate venv + install yt-dlp
RUN /opt/venv/bin/pip install yt-dlp

# PATH set kar
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app
COPY . .

WORKDIR /app/backend
RUN npm install

WORKDIR /app

CMD ["node", "backend/server.js"]