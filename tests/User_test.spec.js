// tests/user_test.spec.js
const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');

test.describe('User Permission Flow', () => {
  test.beforeEach(async ({ page }) => {
    await login(page); // ✅ Login in beforeEach
    await page.waitForTimeout(2000);
  });

  test('Should update user permission', async ({ page }) => {
    await page.locator('header').getByRole('button').hover();
    await page.locator('header').getByRole('button').click();

    await page.getByRole('link', { name: 'Users' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Users' }).click();
    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();

    await page.getByRole('row', { name: 'Mohamed Safvan mohamed.safvan' }).getByRole('cell').nth(2).waitFor({ state: 'visible' });
    await page.getByRole('row', { name: 'Mohamed Safvan mohamed.safvan' }).getByRole('cell').nth(2).click();
    //await page.waitForTimeout(1000);

    await expect(page.getByRole('option', { name: 'Owner' })).toBeVisible();
    await page.getByRole('option', { name: 'Owner' }).hover();
    await page.getByRole('option', { name: 'Owner' }).click();
    //await page.waitForTimeout(1000);
  });
});
