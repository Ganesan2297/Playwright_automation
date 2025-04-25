// tests/create_restaurant.spec.js

const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');
const { fillRestaurantDetails } = require('./helpers/restaurantHelper');
const Restaurantdata = require('./Login/Restaurantdata.json');

test.describe('Create Restaurant Flow', () => {
  test.beforeEach(async ({ page }) => {
    await login(page); // 🔐 Login before each test
  });

  test('Should create the restaurant successfully', async ({ page }) => {
    
   const data = Restaurantdata.theTacoStop

    await page.locator('header').getByRole('button').hover();
    await page.locator('header').getByRole('button').click();

    await expect(page.getByRole('link', { name: 'Restaurants' })).toBeVisible({ timeout: 10000 });
    await page.getByRole('link', { name: 'Restaurants' }).hover();
    await page.getByRole('link', { name: 'Restaurants' }).click();
    await page.getByRole('button', { name: 'Create Restaurant' }).click();

    await fillRestaurantDetails(page, data); // 💡 Calls the helper function with delay
  });
});
