#!/bin/bash

set -e

# .env.local에서 환경변수 로드
if [ -f .env.local ]; then
  export $(grep -v '^#' .env.local | xargs)
else
  echo "Error: .env.local 파일이 없습니다."
  exit 1
fi

# EC2(linux/amd64)용 Docker 이미지 빌드
docker build --platform linux/amd64 \
  --build-arg NEXT_PUBLIC_SUPABASE_URL \
  --build-arg NEXT_PUBLIC_SUPABASE_ANON_KEY \
  -t kihyeoon/danaru:latest .

echo "빌드 완료: kihyeoon/danaru:latest"
