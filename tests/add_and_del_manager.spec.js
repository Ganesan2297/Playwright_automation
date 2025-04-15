import { test } from '@playwright/test';
import { login } from './helpers/loginHelper';
import { addAndDeleteManager } from './helpers/managerHelper';
import { managers } from './Login/managers.json';

    test.describe('Add and Del Manager', () => {
    test.beforeEach(async ({ page }) => {
    await login(page); // ✅ Login before each test
    await page.waitForTimeout(2000);
  });

  test('Should Add and Delete Manager', async ({ page }) => {
    await addAndDeleteManager(page); // ✅ Call the manager function
  });
});
