# Node.js 이미지 사용
FROM node:20-alpine AS builder

# 작업 디렉토리 생성
WORKDIR /app

# 의존성 설치를 위한 package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 앱 빌드
RUN npm run build

# 실행할 기본 이미지
FROM node:20-alpine

# 작업 디렉토리 생성
WORKDIR /app

# 빌드한 결과물 복사
COPY --from=builder /app/dist ./dist

# 포트 설정
EXPOSE 3000

# 서버 시작
CMD ["npm", "start"]
