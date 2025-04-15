const { expect } = require('@playwright/test');

async function addAndDeleteManager(page) {
  await page.locator('header').getByRole('button').hover();
  await page.locator('header').getByRole('button').click();

  await expect(page.getByRole('link', { name: 'Restaurants' })).toBeVisible();
  await page.getByRole('link', { name: 'Restaurants' }).hover();    
  await page.getByRole('link', { name: 'Restaurants' }).click();

  await expect(page.getByRole('row', { name: 'Loading... 📞 +1 (312) 285-' }).getByRole('button').first()).toBeVisible();
  await page.getByRole('row', { name: 'Loading... 📞 +1 (312) 285-' }).getByRole('button').first().hover();
  await page.getByRole('row', { name: 'Loading... 📞 +1 (312) 285-' }).getByRole('button').first().click();

  const Email = managers.ganesh;

  await expect(page.getByRole('textbox', { name: "Enter manager's email" })).toBeVisible();
  await page.getByRole('textbox', { name: "Enter manager's email" }).hover();
  await page.getByRole('textbox', { name: "Enter manager's email" }).click();
  await page.getByRole('textbox', { name: "Enter manager's email" }).fill(Email);

  await expect(page.getByRole('button', { name: 'Add Manager' })).toBeEnabled();
  await page.getByRole('button', { name: 'Add Manager' }).hover();
  await page.getByRole('button', { name: 'Add Manager' }).click();

  await page.getByRole('table').getByRole('button').filter({ hasText: /^$/ }).click();

  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
  await page.getByRole('button', { name: 'Remove' }).hover();
  await page.getByRole('button', { name: 'Remove' }).click();

  await expect(page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button')).toBeVisible();
  await page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button').click();

  console.log(`✅ Manager ${Email} added and removed successfully!`);
}

module.exports = { addAndDeleteManager };
