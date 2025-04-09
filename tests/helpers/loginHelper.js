const { expect } = require('@playwright/test');
const config = require('../Login/Config.json');

  async function login(page) {
  await page.goto(config.baseUrl);
  await expect(page).toHaveTitle('GreenLight Grocery');

  // Click Sign In
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign In' }).hover();
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Enter Login Details
  await expect(page.getByRole('textbox', { name: 'name@host.com' })).toBeVisible();
  await page.getByRole('textbox', { name: 'name@host.com' }).fill(config.username);
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Password' }).fill(config.password);

  await page.waitForTimeout(3000);
  await expect(page.getByRole('button', { name: 'submit' })).toBeVisible();
  await page.getByRole('button', { name: 'submit' }).click();

  const otpInput = page.getByRole('textbox', { name: 'authentication code' });
  await expect(otpInput).toBeVisible({ timeout: 10000 });
  console.log("✅ Enter the OTP manually in the browser. Playwright will continue automatically.");
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForTimeout(10000);
}

module.exports = { login };
