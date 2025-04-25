const { expect } = require('@playwright/test');
const  Managers = require('../Login/Managers.json'); // adjust path if needed

async function addManager(page) {
  await expect(page.locator('header').getByRole('button')).toBeVisible();
  await page.locator('header').getByRole('button').hover();
  await page.locator('header').getByRole('button').click();

  await expect(page.getByRole('link', { name: 'Restaurants' })).toBeVisible();
  await page.getByRole('link', { name: 'Restaurants' }).click();

  //selecting a restaurant to add the Manager
  await page.locator('tr:nth-child(2) > td:nth-child(2) > .min-w-\\[300px\\] > .space-y-4 > div:nth-child(2) > .space-y-2 > .inline-flex').scrollIntoViewIfNeeded();

  await expect(page.locator('tr:nth-child(2) > td:nth-child(2) > .min-w-\\[300px\\] > .space-y-4 > div:nth-child(2) > .space-y-2 > .inline-flex')).toBeVisible();
  await page.locator('tr:nth-child(2) > td:nth-child(2) > .min-w-\\[300px\\] > .space-y-4 > div:nth-child(2) > .space-y-2 > .inline-flex').click();

  const email = Managers.ganesh // change key for dynamic user
  
  //Entering Manager email id and adding
  await expect(page.getByRole('textbox', { name: "Enter manager's email" })).toBeVisible();
  await page.getByRole('textbox', { name: "Enter manager's email" }).fill(email);
  await page.waitForTimeout(1000);
  await expect(page.getByRole('button', { name: 'Add Manager' })).toBeEnabled();
  await page.getByRole('button', { name: 'Add Manager' }).click();

  await expect(page.locator('text=/Manager added successfully/i').first()).toBeVisible({ timeout: 3000 });
  //(await page.getByRole('button', { name: 'Close' }).isVisible()) && await page.getByRole('button', { name: 'Close' }).click();

  console.log(`✅ Manager ${email} added successfully!`);
}

module.exports = { addManager };

