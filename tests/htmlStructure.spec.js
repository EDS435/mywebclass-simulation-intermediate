const { test, expect } = require('@playwright/test')


test('Story page has a valid HTML structure', async ({ page }) => {
    await page.goto('http://localhost:3000/story.html');
    await page.waitForLoadState('networkidle');
    
    const html = await page.content();
    expect(html).toMatch(/^<!DOCTYPE html>\n<html lang="EN">/);
  });
  
  test(' Homepage has a valid HTML structure', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    const html = await page.content();
    expect(html).toMatch(/^<!DOCTYPE html>\n<html lang="EN">/);
  });
  
  test('Content page has a valid HTML structure', async ({ page }) => {
    await page.goto('http://localhost:3000/content.html');
    await page.waitForLoadState('networkidle');
    
    const html = await page.content();
    expect(html).toMatch(/^<!DOCTYPE html>\n<html lang="EN">/);
  });
  