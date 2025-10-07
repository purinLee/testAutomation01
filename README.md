# Playwright + Slack + CI/CD 자동화 테스트
- Wikipedia 대상 자동화 테스트
- GitHub Actions 기반 CI/CD
- HTML 테스트 리포트 생성하여 GitHub Pages로 배포
- Slack Webhook으로 결과 전송

## 실행 방법
1. `.env` 파일에 Slack Webhook URL 등 환경 변수 설정
2. `npm install`
3. `npx playwright test`
