const { test, expect } = require('@playwright/test');
import Config  from './Login/Config.json';


test('User Permission', async ({ page }) => {
    await page.goto(Config.baseUrl);
    await expect(page).toHaveTitle('GreenLight Grocery');

    // Click Sign In
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Sign In' }).click();


    // Enter Login Details
    await expect(page.getByRole('textbox', { name: 'name@host.com' })).toBeVisible();
    await page.getByRole('textbox', { name: 'name@host.com' }).fill(Config.username);


    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible()
    await page.getByRole('textbox', { name: 'Password' }).fill(Config.password);
    await page.waitForTimeout(3000);

    await expect(page.getByRole('button', { name: 'submit' })).toBeVisible();
    await page.getByRole('button', { name: 'submit' }).click();


    const otpInput = page.getByRole('textbox', { name: 'authentication code' });
    await expect(otpInput).toBeVisible({ timeout: 10000 });
    console.log("🔹 Enter the OTP manually in the browser. Playwright will continue automatically."); // Wait up to 10s for the field to appear
    await page.getByRole('button', { name: 'Sign in' }).click();
    console.log('✅ Login successful with OTP!');

    await page.waitForTimeout(5000);

    //  User permission Update

    await page.locator('header').getByRole('button').click()

    await page.getByRole('link', { name: 'Users' }).click();
    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();


    await page.getByRole('row', { name: 'Mohamed Safvan mohamed.safvan' }).getByRole('cell').nth(2).click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: 'Owner' }).click();
});
