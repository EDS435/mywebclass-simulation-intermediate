const { test, expect } = require('@playwright/test');

const devices = [
  { name: 'iPhone 11 Pro', width: 375, height: 812 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'iPad Pro', width: 1024, height: 1366 },
  { name: 'Pixel 2', width: 411, height: 731 },
  { name: 'Pixel 2 XL', width: 411, height: 823 },
  { name: 'Galaxy S5', width: 360, height: 640 },
];

for (const device of devices) {
  test(`responsive test on homepage with ${device.name}`, async ({ page, context }) => {
    // Set the viewport to match the device
    const { width, height } = device;
    await context.newPage({ viewport: { width, height } });
    
    // Navigate to the homepage
    await page.goto('http://localhost:3000');
    
    // Wait for the network to be idle
    await page.waitForLoadState('networkidle');
    
    // Measure the width of the body element
    const bodyWidth = await page.evaluate(() => {
      const body = document.body;
      return body ? body.clientWidth : null;
    });
    
    // Log the body width
    console.log(`Body width on homepage with ${device.name}: ${bodyWidth}`);
    
    // Assert that the body width is within 50 pixels of the device width
    expect(Math.abs(bodyWidth - width)).toBeLessThanOrEqual(50);
  });
}

for (const device of devices) {
  test(`responsive test on story page with ${device.name}`, async ({ page, context }) => {
    // Set the viewport to match the device
    const { width, height } = device;
    await context.newPage({ viewport: { width, height } });
    
    // Navigate to the story page
    await page.goto('http://localhost:3000/story.html');
    
    // Wait for the network to be idle
    await page.waitForLoadState('networkidle');
    
    // Measure the width of the body element
    const bodyWidth = await page.evaluate(() => {
      const body = document.body;
      return body ? body.clientWidth : null;
    });
    
    // Log the body width
    console.log(`Body width on story page with ${device.name}: ${bodyWidth}`);
    
    // Assert that the body width is within 50 pixels of the device width
    expect(Math.abs(bodyWidth - width)).toBeLessThanOrEqual(50);
  });
}


for (const device of devices) {
    test(`responsive test on privacy page with ${device.name}`, async ({ page, context }) => {
      // Set the viewport to match the device
      const { width, height } = device;
      await context.newPage({ viewport: { width, height } });
      
      // Navigate to the privacy page
      await page.goto('http://localhost:3000/privacy.html');
      
      // Wait for the network to be idle
      await page.waitForLoadState('networkidle');
      
      // Measure the width of the body element
      const bodyWidth = await page.evaluate(() => {
        const body = document.body;
        return body ? body.clientWidth : null;
      });
      
      // Log the body width
      console.log(`Body width on privacy page with ${device.name}: ${bodyWidth}`);
      
      // Assert that the body width is within 50 pixels of the device width
      expect(Math.abs(bodyWidth - width)).toBeLessThanOrEqual(50);
    });
  }


  for (const device of devices) {
    test(`responsive test on content page with ${device.name}`, async ({ page, context }) => {
      // Set the viewport to match the device
      const { width, height } = device;
      await context.newPage({ viewport: { width, height } });
      
      // Navigate to the privacy page
      await page.goto('http://localhost:3000/content.html');
      
      // Wait for the network to be idle
      await page.waitForLoadState('networkidle');
      
      // Measure the width of the body element
      const bodyWidth = await page.evaluate(() => {
        const body = document.body;
        return body ? body.clientWidth : null;
      });
      
      // Log the body width
      console.log(`Body width on content page with ${device.name}: ${bodyWidth}`);
      
      // Assert that the body width is within 50 pixels of the device width
      expect(Math.abs(bodyWidth - width)).toBeLessThanOrEqual(50);
    });
  }