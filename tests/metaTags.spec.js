const { test, expect } = require('@playwright/test')



test('homePage has a "keywords" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'My Webclass Homepage';
    const tag = await page.$('head > meta[name="keywords"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('homePage has an "author" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'Keith Williams';
    const tag = await page.$('head > meta[name="author"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('homePage has a "description" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'A project to help educators integrate new technoliges into their teaching';
    const tag = await page.$('head > meta[name="description"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('homePage has an "og:title" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'MyWebClass.org';
    const tag = await page.$('head > meta[property="og:title"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('homePage has an "og:description" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'A project to help educators integrate new technoliges into their teaching';
    const tag = await page.$('head > meta[property="og:description"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('homePage has an "og:image" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'assets/images/logo.png';
    const tag = await page.$('head > meta[property="og:image"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('homePage has an "og:url" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = '';
    const tag = await page.$('head > meta[property="og:url"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });




  test('privacyPage has a "keywords" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000/privacy.html');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'My Webclass Privacy Policy';
    const tag = await page.$('head > meta[name="keywords"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });





  
    test('has a "keywords" meta tag with the expected value', async ({ page }) => {
        await page.goto('http://localhost:3000/content.html');
        await page.waitForLoadState('networkidle');
      const expectedValue = 'My Webclass Content';
      const tag = await page.$('head > meta[name="keywords"]');
      expect(tag).toBeDefined();
      expect(await tag.getAttribute('content')).toEqual(expectedValue);
    });
  
    test('has an "author" meta tag with the expected value', async ({ page }) => {
        await page.goto('http://localhost:3000/content.html');
        await page.waitForLoadState('networkidle');
      const expectedValue = 'Keith Williams';
      const tag = await page.$('head > meta[name="author"]');
      expect(tag).toBeDefined();
      expect(await tag.getAttribute('content')).toEqual(expectedValue);
    });
  
    test('has a "description" meta tag with the expected value', async ({ page }) => {
        await page.goto('http://localhost:3000/content.html');
        await page.waitForLoadState('networkidle');
      const expectedValue = 'My Webclass Content';
      const tag = await page.$('head > meta[name="description"]');
      expect(tag).toBeDefined();
      expect(await tag.getAttribute('content')).toEqual(expectedValue);
    });
  
    test('has an "og:title" meta tag with the expected value', async ({ page }) => {
        await page.goto('http://localhost:3000/content.html');
        await page.waitForLoadState('networkidle');
      const expectedValue = 'MyWebClass.org - Content';
      const tag = await page.$('head > meta[property="og:title"]');
      expect(tag).toBeDefined();
      expect(await tag.getAttribute('content')).toEqual(expectedValue);
    });
  
    test('has an "og:description" meta tag with the expected value', async ({ page }) => {
        await page.goto('http://localhost:3000/content.html');
        await page.waitForLoadState('networkidle');
      const expectedValue = 'My Webclass Content';
      const tag = await page.$('head > meta[property="og:description"]');
      expect(tag).toBeDefined();
      expect(await tag.getAttribute('content')).toEqual(expectedValue);
    });
  
    test('has an "og:image" meta tag with the expected value', async ({ page }) => {
        await page.goto('http://localhost:3000/content.html');
        await page.waitForLoadState('networkidle');
      const expectedValue = 'assets/images/logo.png';
      const tag = await page.$('head > meta[property="og:image"]');
      expect(tag).toBeDefined();
      expect(await tag.getAttribute('content')).toEqual(expectedValue);
    });
  
    test('has an "og:url" meta tag with the expected value', async ({ page }) => {
        await page.goto('http://localhost:3000/content.html');
        await page.waitForLoadState('networkidle');
      const expectedValue = 'http://localhost:3000/content.html';
      const tag = await page.$('head > meta[property="og:url"]');
      expect(tag).toBeDefined();
      expect(await tag.getAttribute('content')).toEqual(expectedValue);
    });

  
  test('privacyPage has an "author" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000/privacy.html');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'Keith Williams';
    const tag = await page.$('head > meta[name="author"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('privacyPage has a "description" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000/privacy.html');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'My Webclass Privacy Policy';
    const tag = await page.$('head > meta[name="description"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('privacyPage has an "og:title" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000/privacy.html');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'MyWebClass.org - Privacy Policy';
    const tag = await page.$('head > meta[property="og:title"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('privacyPage has an "og:description" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000/privacy.html');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'My Webclass Privacy Policy';
    const tag = await page.$('head > meta[property="og:description"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('privacyPage has an "og:image" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000/privacy.html');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'assets/images/logo.png';
    const tag = await page.$('head > meta[property="og:image"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
  
  test('privacyPage has an "og:url" meta tag with the expected value', async ({ page }) => {
    await page.goto('http://localhost:3000/privacy.html');
    await page.waitForLoadState('networkidle');
  
    const expectedValue = 'http://localhost:3000/privacy.html';
    const tag = await page.$('head > meta[property="og:url"]');
    expect(tag).toBeDefined();
    expect(await tag.getAttribute('content')).toEqual(expectedValue);
  });
