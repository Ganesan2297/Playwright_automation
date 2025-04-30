const { test } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');
const { addManager } = require('./helpers/managerHelper');

test.describe('Add Manager Flow', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.waitForTimeout(2000);
  });

  test('Should Add Manager', async ({ page }) => {
    await addManager(page);
  });
});