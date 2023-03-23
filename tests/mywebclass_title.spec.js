// @ts-check
const { test, expect } = require('@playwright/test')

const axeCore = require('axe-core');

test('Should have MyWebClass.org title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle('MyWebClass.org')
})



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




test('Privacy Modal Test', async ({ page }) => {

  await page.goto('http://localhost:3000');

  // Wait for the modal to appear
  await page.waitForSelector('#privacyModal.modal.fade');

  // Check if the modal is visible
  const modal = await page.$('#privacyModal.modal.fade');
  expect(modal).toBeTruthy();

  // Check if the modal title is visible and correct
  const title = await page.$eval('.modal-title', el => el.textContent);
  expect(title).toBe('Privacy Policy');

  // Check if the "Agree" and "Disagree" buttons are visible
  const agreeButton = await page.$('#agreeButton');
  const disagreeButton = await page.$('.modal-footer .btn.btn-secondary');
  expect(agreeButton).toBeTruthy();
  expect(disagreeButton).toBeTruthy();

  // Click the "Agree" button
  await page.click('#agreeButton');
  
  // Add any assertions or checks you need after clicking the "Agree" button
});


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
