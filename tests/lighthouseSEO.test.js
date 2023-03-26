const { test, expect } = require('@playwright/test');
const { execSync } = require('child_process');
const { readFileSync } = require('fs');



test('Lighthouse content page audit SEO ', async ({ page }) => {
    await page.goto('http://localhost:3000/content.html');
  
    const url = page.url();
    const reportPath = 'lighthouse-report.json';
    const command = `npx lighthouse ${url} --output json --output-path ${reportPath} --only-categories=seo,best-practices`;
  
    try {
      execSync(command);
    } catch (error) {
      console.error('Error running Lighthouse:', error);
    }
  
    const lhr = JSON.parse(readFileSync(reportPath));
  
    const seoScore = lhr.categories.seo.score * 100;
  
    expect(seoScore).toBeGreaterThanOrEqual(90);
  
  });
  
  
  test('Lighthouse homepage page audit SEO ', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    const url = page.url();
    const reportPath = 'lighthouse-report.json';
    const command = `npx lighthouse ${url} --output json --output-path ${reportPath} --only-categories=seo,best-practices`;
  
    try {
      execSync(command);
    } catch (error) {
      console.error('Error running Lighthouse:', error);
    }
  
    const lhr = JSON.parse(readFileSync(reportPath));
  
    const seoScore = lhr.categories.seo.score * 100;
  
  
    expect(seoScore).toBeGreaterThanOrEqual(90);
  
  });