// @ts-check
const { test, expect } = require('@playwright/test')








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