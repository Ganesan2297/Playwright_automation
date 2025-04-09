const { test } = require('@playwright/test');
const { login } = require('./helpers/loginHelper');
const { createAndCheckoutOrder } = require('./helpers/orderHelper');

test.describe('Login and Order Flow - Full Flow', () => {

    test.beforeEach(async ({ page }) => {
    await login(page); // login step
  });

  test('Order Placed and Email sent Successfully', async ({ page }) => {
    await createAndCheckoutOrder(page); // ordering step
  });

});
