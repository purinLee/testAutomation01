# Playwright E2E 테스트 자동화 프로젝트
소개
이 프로젝트는 다음 기능들을 포함한 Playwirght 기반의 E2E 테스트 자동화 환경입니다
Playwright를 이용한 테스트 실행
GitHub Actions를 통한 CI/CD 자동화
HTML 리포트 자동 생성 및 배포
Slack Webhook 알림 연동

## 필수 설치 항목
시스템 설치
Node.js (버전 18이상 권장)
VS Code

VS Code 확장 프로그램
Playwright Test for VSCode

### 프로젝트 설정
필요한 모듈 설치
npm install
npx playwright install

로컬에서 테스트 실행
npx palywright test

결과 리포트 보기
npx playwright show-report

헤드 모드로 실행 (브라우저 UI 켜짐)
npx playwright test --headed

#### CI/CD 파이프라인 (GitHub Actions)
자동화 동작 흐름
1. main 브랜치에 코드 푸시
2. GitHub Actions가 실행됨
3. 테스트 실행
4. HTML 리포트 생성
5. Slack Webhook으로 테스트 결과 요약 전송
6. 리포트를 GitHub Pages에 자동 배포(GitHub Actions에서 생성된 HTML 리포트를 GitHub Pages에 publish한 후, Slack에 리포트 링크 자동 전송)
