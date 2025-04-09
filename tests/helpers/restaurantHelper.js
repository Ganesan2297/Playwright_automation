// helpers/restaurantHelper.js

const { expect } = require('@playwright/test');


async function fillRestaurantDetails(page, data) {
   
  await page.getByRole('textbox', { name: 'Restaurant Name' }).fill(data.restaurantName);
  await page.getByRole('textbox', { name: '(216) 421-' }).fill(data.phone);
  await page.getByRole('textbox', { name: 'Street Address' }).fill(data.streetAddress);
  await page.getByRole('textbox', { name: 'City' }).fill(data.city);
  await page.getByRole('combobox', { name: 'State' }).click();
  await page.getByRole('option', { name: data.state }).click();
  await page.getByRole('textbox', { name: 'Postal Code' }).fill(data.postalCode);
  await page.getByRole('button', { name: 'Create Greenlight Restaurant' }).click();
  console.log(`✅ ${data.restaurantName} created successfully!`);
}

module.exports = { fillRestaurantDetails };
