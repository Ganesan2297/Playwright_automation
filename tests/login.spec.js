const { test } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');

    test.describe('Login Flow', () => {
    test.beforeEach(async ({ page }) => {
    await login(page);
  });

    test('Logged In Successfully', async ({ page }) => {
    // Add assertions to verify successful login
  });
});
