// @ts-check


const { test, expect } = require('@playwright/test');



 




test('Keyword research test', async ({ page }) => {
  // Navigate to the web class website
  await page.goto('http://localhost:3000');

  // Check for relevant keywords in the page content
  const pageContent = await page.textContent('body');
  const relevantKeywords = ['web development', 'online courses', 'HTML', 'CSS', 'JavaScript'];
  const hasRelevantKeywords = relevantKeywords.every(keyword => pageContent.includes(keyword));
  await expect(hasRelevantKeywords).toBeTruthy();
});




test('On-page optimization test', async ({ page }) => {
  // Navigate to the web class website
  await page.goto('http://localhost:3000');

  // Check the title tag and meta description for relevant keywords
  const titleTag = await page.title();
  const metaDescription = await page.$eval('meta[name="description"]', el => el.content);
  const relevantKeywords = ['web development', 'online courses', 'HTML', 'CSS', 'JavaScript'];
  const hasRelevantKeywords = relevantKeywords.every(keyword => {
    return titleTag.includes(keyword) || metaDescription.includes(keyword);
  });
  await expect(hasRelevantKeywords).toBeTruthy();

  // Check header tags for relevant keywords
  const headerTags = await page.$$eval('h1, h2, h3, h4, h5, h6', headers => headers.map(header => header.textContent));
  const headerTagsContainKeywords = headerTags.every(header => {
    return relevantKeywords.some(keyword => header.includes(keyword));
  });
  await expect(headerTagsContainKeywords).toBeTruthy();
});



test('Site structure test', async ({ page }) => {
  // Navigate to the web class website
  await page.goto('http://localhost:3000');

  // Check for a clear and organized site structure
  const mainMenuLinks = await page.$$('.main-menu a');
  const hasMainMenuLinks = mainMenuLinks.length > 0;
  await expect(hasMainMenuLinks).toBeTruthy();

  const footerLinks = await page.$$('.footer a');
  const hasFooterLinks = footerLinks.length > 0;
  await expect(hasFooterLinks).toBeTruthy();

  const internalLinks = await page.$$('a[href^="http://localhost:3000"]');
  const hasInternalLinks = internalLinks.length > 0;
  await expect(hasInternalLinks).toBeTruthy();
});



test('Mobile-friendliness test', async ({ page }) => {
  // Navigate to the web class website
  await page.goto('http://localhost:3000');

  // Check if the website is mobile-friendly
  const isMobileFriendly = await page.evaluate(() => {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return viewportWidth <= 768; // Assume mobile-friendly if viewport width is <= 768px
  });
  await expect(isMobileFriendly).toBeTruthy();
});



test('Speed and performance test', async ({ page }) => {
  // Navigate to the web class website
  await page.goto('http://localhost:3000');

   // Check the website's speed and performance
   const metrics = await page.metrics();
   const isFast = metrics.LayoutDuration < 1000 && metrics.ScriptDuration < 2000 && metrics.TaskDuration < 2000;
   await expect(isFast).toBeTruthy();
 });
 