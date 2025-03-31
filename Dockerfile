FROM node:16-alpine

WORKDIR /app

# 패키지 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 애플리케이션 포트 노출
EXPOSE 9102

# 애플리케이션 실행
CMD ["node", "app.js"]