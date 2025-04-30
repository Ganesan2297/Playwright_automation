const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');

test.describe('Past Order', () => {
  test.beforeEach(async ({ page }) => {
    await login(page); // ✅ Login in beforeEach
    await page.waitForTimeout(2000);
  });

  test('Should Able to View Past Orders.', async ({ page }) => {
    await page.locator('header').getByRole('button').hover();
    await page.locator('header').getByRole('button').click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Past Orders' }).hover();
    await page.getByRole('link', { name: 'Past Orders' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('row', { name: '01JSKSRR7HKVBFMGYGEH53FJDT' }).getByRole('button').hover(); 
    await page.getByRole('row', { name: '01JSKSRR7HKVBFMGYGEH53FJDT' }).getByRole('button').click(); 
    await page.waitForTimeout(5000);
    //await page.waitForTimeout(3000);
 
}); 

});