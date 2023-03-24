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
