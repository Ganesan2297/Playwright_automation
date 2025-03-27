import config from './Config2.json'; // Import JSON file
import { test, expect } from '@playwright/test';

test.describe('Negative Test Cases - SauceDemo', () => {
  
  // ❌ Test Case 1: Invalid Username
  test('Invalid Username Test', async ({ page }) => {
    await page.goto(Config2.saucedemo.url);
    await page.locator('#user-name').fill(Config2.saucedemo.invalidCredentials.wrongUsername.username);
    await page.locator('#password').fill(Config2.saucedemo.invalidCredentials.wrongUsername.password);
    await page.locator('#login-button').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    console.log('❌ Login failed as expected with incorrect username');
  });

  // ❌ Test Case 2: Invalid Password
  test('Invalid Password Test', async ({ page }) => {
    await page.goto(config.saucedemo.url);
    await page.locator('#user-name').fill(Config2.saucedemo.invalidCredentials.wrongPassword.username);
    await page.locator('#password').fill(Config2.saucedemo.invalidCredentials.wrongPassword.password);
    await page.locator('#login-button').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    console.log('❌ Login failed as expected with incorrect password');
  });

  // ❌ Test Case 3: Empty Username & Password
  test('Empty Username & Password Test', async ({ page }) => {
    await page.goto(Config2.saucedemo.url);
    await page.locator('#user-name').fill(Config2.saucedemo.invalidCredentials.emptyFields.username);
    await page.locator('#password').fill(Config2.saucedemo.invalidCredentials.emptyFields.password);
    await page.locator('#login-button').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    console.log('❌ Login failed as expected with empty fields');
  });

  // ❌ Test Case 4: Locked Out User
  test('Locked Out User Test', async ({ page }) => {
    await page.goto(Config2.saucedemo.url);
    await page.locator('#user-name').fill(Config2.saucedemo.invalidCredentials.lockedOutUser.username);
    await page.locator('#password').fill(Config2.saucedemo.invalidCredentials.lockedOutUser.password);
    await page.locator('#login-button').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    console.log('❌ Login failed as expected for locked-out user');
  });

  // ❌ Test Case 5: Invalid Checkout - Empty First Name
  test('Checkout with Empty First Name', async ({ page }) => {
    await page.goto(config.saucedemo.url);
    await page.locator('#user-name').fill(config.saucedemo.validCredentials.username);
    await page.locator('#password').fill(config.saucedemo.validCredentials.password);
    await page.locator('#login-button').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill(config.saucedemo.invalidCheckoutDetails.emptyFirstName.firstName);
    await page.locator('[data-test="lastName"]').fill(config.saucedemo.invalidCheckoutDetails.emptyFirstName.lastName);
    await page.locator('[data-test="postalCode"]').fill(config.saucedemo.invalidCheckoutDetails.emptyFirstName.postalCode);

    await page.locator('[data-test="continue"]').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    console.log('❌ Checkout failed due to missing first name');
  });

  // ❌ Test Case 6: Invalid Checkout - Empty Last Name
  test('Checkout with Empty Last Name', async ({ page }) => {
    await page.goto(config.saucedemo.url);
    await page.locator('#user-name').fill(config.saucedemo.validCredentials.username);
    await page.locator('#password').fill(config.saucedemo.validCredentials.password);
    await page.locator('#login-button').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill(config.saucedemo.invalidCheckoutDetails.emptyLastName.firstName);
    await page.locator('[data-test="lastName"]').fill(config.saucedemo.invalidCheckoutDetails.emptyLastName.lastName);
    await page.locator('[data-test="postalCode"]').fill(config.saucedemo.invalidCheckoutDetails.emptyLastName.postalCode);

    await page.locator('[data-test="continue"]').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    console.log('❌ Checkout failed due to missing last name');
  });

  // ❌ Test Case 7: Invalid Checkout - Empty Postal Code
  test('Checkout with Empty Postal Code', async ({ page }) => {
    await page.goto(config.saucedemo.url);
    await page.locator('#user-name').fill(config.saucedemo.validCredentials.username);
    await page.locator('#password').fill(config.saucedemo.validCredentials.password);
    await page.locator('#login-button').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill(config.saucedemo.invalidCheckoutDetails.emptyPostalCode.firstName);
    await page.locator('[data-test="lastName"]').fill(config.saucedemo.invalidCheckoutDetails.emptyPostalCode.lastName);
    await page.locator('[data-test="postalCode"]').fill(config.saucedemo.invalidCheckoutDetails.emptyPostalCode.postalCode);

    await page.locator('[data-test="continue"]').click();

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    console.log('❌ Checkout failed due to missing postal code');
  });

});
