const { test, expect } = require('@playwright/test');
const { authenticator } = require('otplib');
const config = require('./Login/Config.json'); // Import JSON configuration

test('Login Test with OTP', async ({ page }) => {
    await page.goto(config.baseUrl);
    await expect(page).toHaveTitle('GreenLight Grocery');

    // Click Sign In
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Enter Login Details
    await page.getByRole('textbox', { name: 'name@host.com' }).fill(config.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'submit' }).click();
    

    // Generate OTP
    authenticator.options = { step: 30, window: 1 }; // Adjust OTP validity window
    const otp = authenticator.generate(config.totpSecret);
    console.log(`Generated OTP: ${otp}`);

    // Enter OTP
    await page.getByRole('textbox', { name: 'authentication code' }).fill(otp);
    await page.getByRole('button', { name: 'Sign in' }).click(); 

    console.log('✅ Login successful with OTP!');
});
