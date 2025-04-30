const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');


test.describe('Restaurant Deletion Flow', () => {
  test.beforeEach(async ({ page }) => {
    await login(page); // ✅ Login in beforeEach
    await page.waitForTimeout(2000);
  });

  test(' Delete Restaurant', async ({ page }) => {

    await page.locator('header').getByRole('button').hover();
    await page.locator('header').getByRole('button').click();

    await expect(page.getByRole('link', { name: 'Restaurants' })).toBeVisible();
    await page.getByRole('link', { name: 'Restaurants' }).hover();    
    await page.getByRole('link', { name: 'Restaurants' }).click();
    await page.waitForTimeout(1000);

    //await page.getByRole('button', { name: 'Delete Restaurant Taco Daddy\'s' }).nth(1).click();
    await page.getByRole('button', { name: /Delete Restaurant .*Americano.*/ }).first().click(); 
    

    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
    await page.getByRole('button', { name: 'Delete' }).click();

    //await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
    //await page.getByRole('button', { name: 'Remove' }).click();

    await expect(page.getByText(/🗑️ Restaurant DeletedSuccessfully deleted/).first()).toBeVisible();
    await page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button').click();

   
  });
});
