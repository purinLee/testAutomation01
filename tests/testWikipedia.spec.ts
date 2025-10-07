import { test, expect } from '@playwright/test';

test('검색/결과 기능 확인', async ({ page }) => {
  const start = Date.now();

  // 1. 위키피디아 메인 페이지 이동
  await page.goto('https://www.wikipedia.org/');
  const afterGoto = Date.now();

  // 2. 검색창에 "Playwright" 입력
  await page.getByLabel('Search Wikipedia').fill('Playwright (Software)');
  await page.locator('button[type="submit"]').click();
  const afterSearch = Date.now();
  
  // 3. 검색 결과 URL 확인 (키워드가 포함됐는지 URL 확인)
  await expect(page).toHaveURL(/\/wiki\/Playwright(?:_\(software\))?$/);
  // 4. 첫 번째 결과 제목에 "Playwright" 포함 확인 
  await expect(page.locator('#firstHeading')).toContainText('Playwright');
  const afterCheck = Date.now();
  const keyword = 'Playwright';
  
  const text = await page.innerText('body');
  const textCount = text.split(keyword).length - 1;

  const end = Date.now();

  // 시간 측정 결과 출력 로그
  console.log(`------ 시간 측정 결과 (단위: 초) ------`);
  console.log(`1) 페이지 로딩: ${(afterGoto - start) / 1000}`);
  console.log(`2) 검색 입력 및 결과 이동: ${(afterSearch - afterGoto) / 1000}`);
  console.log(`3) 결과 확인(URL 및 제목): ${(afterCheck - afterSearch) / 1000}`);
  console.log(`4) 전체 흐름: ${(end -start) / 1000}`);
  console.log(`5) '${keyword}' 단어 개수: ${textCount}`);
});
