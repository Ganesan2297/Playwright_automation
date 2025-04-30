const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');

test.describe('Del Manager Flow', () => {
    test.beforeEach(async ({ page }) => {
      await login(page);
      await page.waitForTimeout(2000);
    });
  
test('Should Del Manager', async ({ page }) => {

await page.locator('header').getByRole('button').hover();
await page.locator('header').getByRole('button').click();
        
await expect(page.getByRole('link', { name: 'Restaurants' })).toBeVisible();
await page.getByRole('link', { name: 'Restaurants' }).click();

await expect(page.getByRole('cell', { name: 'Owner 👤 Ganesan Ganesan 📧 ganesan.rs@numentica-ui.com 📅 Joined Apr 15, 2025 Managers 👤 Ganesan Ganesan 📧 ganesan.rs@numentica-ui.com 📅 Joined Apr 15, 2025 + Add Manager', exact: true }).getByRole('button').first()).toBeVisible();
await page.getByRole('cell', { name: 'Owner 👤 Ganesan Ganesan 📧 ganesan.rs@numentica-ui.com 📅 Joined Apr 15, 2025 Managers 👤 Ganesan Ganesan 📧 ganesan.rs@numentica-ui.com 📅 Joined Apr 15, 2025 + Add Manager', exact: true }).getByRole('button').first().click();

await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
await page.getByRole('button', { name: 'Remove' }).click();
await expect(page.locator('text=Manager removed successfully').first()).toBeVisible();
await page.waitForTimeout(1000);





});
   });
  