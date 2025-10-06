const fetch = require('node-fetch');
const fs = require('fs');

const webhookUrl = process.env.SLACK_WEBHOOK_URL;
const reportUrl = 'https://purinLee.github.io/testAutomation01/playwright-report/index.html';

const summary = `
*Playwright 테스트 완료*
Result: <${reportUrl}|HTML 리포트 보기>
Time: ${new Date().toLocaleString()}
`;

async function sendSlackMessage() {
  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL is not set.');
    process.exit(1);
  }

  const payload = {
    text: summary,
  };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    console.log('Slack 알림 전송 완료');
  } else {
    console.error('Slack 전송 실패:', res.statusText);
  }
}

sendSlackMessage();
