const { test, expect } = require('@playwright/test');

test('check homepage load time', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000');
  
  // Wait for the network to be idle
  await page.waitForLoadState('networkidle');
  
  // Measure the page load time
  const loadTime = await page.evaluate(() => {
    const navigationStart = performance.timing.navigationStart;
    const loadEventEnd = performance.timing.loadEventEnd;
    return loadEventEnd - navigationStart;
  });
  
  // Log the page load time
  console.log(`Page loaded in ${loadTime}ms`);
  
  // Assert that the page loaded in less than 5 seconds
  expect(loadTime).toBeLessThanOrEqual(5000);
});

test('check content page load time', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/content.html');
    
    // Wait for the network to be idle
    await page.waitForLoadState('networkidle');
    
    // Measure the page load time
    const loadTime = await page.evaluate(() => {
      const navigationStart = performance.timing.navigationStart;
      const loadEventEnd = performance.timing.loadEventEnd;
      return loadEventEnd - navigationStart;
    });
    
    // Log the page load time
    console.log(`Page loaded in ${loadTime}ms`);
    
    // Assert that the page loaded in less than 5 seconds
    expect(loadTime).toBeLessThanOrEqual(5000);
  });

  test('check privacy page load time', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/privacy.html');
    
    // Wait for the network to be idle
    await page.waitForLoadState('networkidle');
    
    // Measure the page load time
    const loadTime = await page.evaluate(() => {
      const navigationStart = performance.timing.navigationStart;
      const loadEventEnd = performance.timing.loadEventEnd;
      return loadEventEnd - navigationStart;
    });
    
    // Log the page load time
    console.log(`Page loaded in ${loadTime}ms`);
    
    // Assert that the page loaded in less than 5 seconds
    expect(loadTime).toBeLessThanOrEqual(5000);
  });

  test('check story page load time', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3000/story.html');
    
    // Wait for the network to be idle
    await page.waitForLoadState('networkidle');
    
    // Measure the page load time
    const loadTime = await page.evaluate(() => {
      const navigationStart = performance.timing.navigationStart;
      const loadEventEnd = performance.timing.loadEventEnd;
      return loadEventEnd - navigationStart;
    });
    
    // Log the page load time
    console.log(`Page loaded in ${loadTime}ms`);
    
    // Assert that the page loaded in less than 5 seconds
    expect(loadTime).toBeLessThanOrEqual(5000);
  });