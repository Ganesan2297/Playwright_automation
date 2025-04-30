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
    await page.getByRole('link', { name: 'Users' }).click();
    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
    await page.waitForTimeout(1000);

    await page.getByRole('row', { name: 'Mohamed Safvan mohamed.safvan' }).getByRole('combobox').click();
    await page.getByRole('option', { name: 'Owner' }).click();
    
    const statusMessage = page.getByRole('status').nth(1); 
    await expect(statusMessage).toHaveText(/User group updated successfully/i);
    await page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button').click();

    //again bring back to Super admin
    await page.getByRole('row', { name: 'Mohamed Safvan mohamed.safvan' }).getByRole('combobox').click();
    await page.getByRole('option', { name: 'Super Admin' }).click();
    await page.waitForTimeout(1000);



  });
});
  
    
