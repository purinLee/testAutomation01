import { test, expect } from '@playwright/test';

test('검색/결과 기능 확인', async ({ page }) => {
  // 1. 위키피디아 메인 페이지 이동
  await page.goto('https://www.wikipedia.org/');
  // 2. 검색창에 "Playwright" 입력
  await page.getByLabel('Search Wikipedia').fill('Playwright (Software)');
  await page.locator('button[type="submit"]').click();
  
  // 3. 검색 결과 URL 확인 (키워드가 포함됐는지 URL 확인)
  await expect(page).toHaveURL(/\/wiki\/Playwright(?:_\(software\))?$/);
  // 4. 첫 번째 결과 제목에 "Playwright" 포함 확인 
  await expect(page.locator('#firstHeading')).toContainText('Playwright');
  // 5. "Playwright" 키워드를 포함한 검색 결과 요소 찾기
  const matchedSpans = page.locator('span.searchmatch');
});
