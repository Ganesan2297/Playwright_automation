const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');

test.describe('Restaurant Deletion Flow', () => {
  test.beforeEach(async ({ page }) => {
    await login(page); // ✅ Login in beforeEach
    await page.waitForTimeout(2000);
  });

  test('Should Delete Restaurant', async ({ page }) => {

    await page.locator('header').getByRole('button').hover();
    await page.locator('header').getByRole('button').click();

    await expect(page.getByRole('link', { name: 'Restaurants' })).toBeVisible();
    await page.getByRole('link', { name: 'Restaurants' }).hover();    
    await page.getByRole('link', { name: 'Restaurants' }).click();
    await page.waitForTimeout(1000);

    await expect(page.locator('tr:nth-child(5) > td:nth-child(6) > div > .justify-center')).toBeVisible();
    await page.locator('tr:nth-child(5) > td:nth-child(6) > div > .justify-center').hover();
    await page.locator('tr:nth-child(5) > td:nth-child(6) > div > .justify-center').click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Delete' }).hover();
    await expect(page.getByRole('button', { name: 'Delete' })).toBeEnabled();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button').click();
  });
});
