const { test, expect } = require('@playwright/test');
import Config from './Login/Config.json'

// Shared login step
  async function login(page) {
  await page.goto(Config.baseUrl);
  await expect(page).toHaveTitle('GreenLight Grocery');

  //Sign In
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign In' }).hover();
  await page.getByRole('button', { name: 'Sign In' }).click();


  await page.getByRole('textbox', { name: 'name@host.com' }).fill(Config.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(Config.password);
  await page.waitForTimeout(3000);
  
  await page.getByRole('button', { name: 'submit' }).hover();
  await page.getByRole('button', { name: 'submit' }).click();

  const otpInput = page.getByRole('textbox', { name: 'authentication code' });
  await expect(otpInput).toBeVisible({ timeout: 10000 });
  console.log("✅ Enter OTP manually");
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(10000);
  
}

test('Login Test - Happy Path', async ({ page }) => {
  await login(page);
});
