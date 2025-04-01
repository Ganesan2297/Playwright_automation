import { test, expect } from '@playwright/test';
const Config2 = require('./Login/Config2.json');

test('Selectors for Login', async ({ page }) => {
   await page.goto(Config2.url);
   await expect(page).toHaveTitle('Swag Labs');
   console.log('✅ Title is correct');


   // Login
   await page.locator('#user-name').fill(Config2.username);
   await page.locator('#password').fill(Config2.password);
   await page.waitForTimeout(2000);
   await page.locator('#login-button').click();

   // Add item to cart & checkout
   await page.waitForTimeout(2000);
   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
   await page.waitForTimeout(2000);
   await page.locator('[data-test="shopping-cart-link"]').click();
   await page.waitForTimeout(4000);
   await page.locator('[data-test="checkout"]').click();
   

   // Enter user details dynamically from JSON
   await page.locator('[data-test="firstName"]').fill(Config2.firstName);
   await page.locator('[data-test="lastName"]').fill(Config2.lastName);
   await page.locator('[data-test="postalCode"]').fill(Config2.postalCode);
   await page.waitForTimeout(5000);

   // Complete the order
   await page.locator('[data-test="continue"]').click();
   await page.locator('[data-test="finish"]').click();
   await page.waitForTimeout(5000);
   await page.locator('[data-test="back-to-products"]').click();

   console.log('✅ Order completed successfully');
});
