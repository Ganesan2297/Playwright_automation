const { expect } = require('@playwright/test');

async function createAndCheckoutOrder(page) {
  // Open navigation
  await page.locator('header').getByRole('button').hover();
  await page.locator('header').getByRole('button').click();

  // Navigate to New Order
  await expect(page.getByRole('link', { name: 'New Order' })).toBeVisible();
  await page.getByRole('link', { name: 'New Order' }).hover();
  await page.getByRole('link', { name: 'New Order' }).click();

  // Select a restaurant
  await page.getByText('Americano, Lincoln ParkChicago, IL').click();
  await expect(page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' })).toBeVisible();
  await page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' }).hover();
  await page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' }).click();

  // Click All Products and search
  await page.getByRole('tab', { name: 'All Products' }).click();
  await expect(page.getByRole('textbox', { name: 'Search All Products by name...' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search All Products by name...' }).click();
  await page.getByRole('textbox', { name: 'Search All Products by name...' }).fill('chilli');
  await expect(page.getByRole('button', { name: 'Search' })).toBeEnabled();
  await page.getByRole('button', { name: 'Search' }).click();

  // Wait for products
  await page.waitForSelector('.flex.flex-col.items-start.py-4.px-8.w-full.overflow-auto', { timeout: 10000 });

  // Select item and quantity
  await expect(page.locator('.bg-zinc-800\\/90 > button').first()).toBeVisible({ timeout: 10000 }).then(() =>page.locator('.bg-zinc-800\\/90 > button').first().click());
  await expect(page.getByRole('textbox').nth(1)).toBeEnabled();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('10');
  await page.waitForTimeout(1000);

  // Checkout
  await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible({ timeout: 5000 });
  await expect(page.getByRole('button', { name: 'Checkout' })).toBeEnabled();
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Email page
  
  await expect(page.getByRole('button', { name: 'Send Email Total: $' })).toBeEnabled();
  await page.getByRole('button', { name: 'Send Email Total: $' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('button', { name: 'Send Email' })).toBeVisible();
  await page.getByRole('button', { name: 'Send Email' }).hover();
  await page.getByRole('button', { name: 'Send Email' }).click();
  console.log("✅ Email Sent Successfully");
  

  // Return to ordering
  await expect(page.getByRole('button', { name: 'Return Ordering' })).toBeEnabled();
  await page.getByRole('button', { name: 'Return Ordering' }).hover();
  await page.getByRole('button', { name: 'Return Ordering' }).click();
}

module.exports = { createAndCheckoutOrder };
