// helpers/restaurantHelper.js

const { expect } = require('@playwright/test');


async function fillRestaurantDetails(page, data) {
   
  await expect(page.getByRole('textbox', { name: 'Restaurant Name' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Restaurant Name' }).fill(data.restaurantName);
  await page.waitForTimeout(1000);

  await expect(page.getByRole('textbox', { name: '(216) 421-' })).toBeVisible();
  await page.getByRole('textbox', { name: '(216) 421-' }).fill(data.phone);
  await page.waitForTimeout(1000);

  await expect(page.getByRole('textbox', { name: 'Street Address' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Street Address' }).fill(data.streetAddress);
  await page.waitForTimeout(1000);

  await expect(page.getByRole('textbox', { name: 'City' })).toBeVisible();
  await page.getByRole('textbox', { name: 'City' }).fill(data.city);
  await page.waitForTimeout(1000);

  await expect(page.getByRole('combobox', { name: 'State' })).toBeVisible();
  await page.getByRole('combobox', { name: 'State' }).click();
  await expect(page.getByRole('option', { name: data.state })).toBeVisible();
  await page.getByRole('option', { name: data.state }).click();
  await page.waitForTimeout(1000);

  await expect(page.getByRole('textbox', { name: 'Postal Code' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Postal Code' }).fill(data.postalCode);

  await expect(page.getByRole('button', { name: 'Create Greenlight Restaurant' })).toBeEnabled();
  await page.getByRole('button', { name: 'Create Greenlight Restaurant' }).click();
  await expect(page.getByText(/Restaurant CreatedSuccessfully created/i).first()).toBeVisible();


  console.log(`✅ ${data.restaurantName} created successfully!`);

}

module.exports = { fillRestaurantDetails };
