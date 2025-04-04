const { test, expect } = require('@playwright/test');
//const { authenticator } = require('otplib');
const config = require('./Login/Config.json'); // Import JSON configuration
//test.describe.configure({ retries: 1 });

test('Login Test with Happy Path', async ({ page }) => {
    await page.goto(config.baseUrl);
    await expect(page).toHaveTitle('GreenLight Grocery');

    // Click Sign In
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Sign In' }).click();


    // Enter Login Details
    await expect(page.getByRole('textbox', { name: 'name@host.com' })).toBeVisible();
    await page.getByRole('textbox', { name: 'name@host.com' }).fill(config.username);


    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible()
    await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
    await page.waitForTimeout(3000);

    await expect(page.getByRole('button', { name: 'submit' })).toBeVisible();
    await page.getByRole('button', { name: 'submit' }).click();


    const otpInput = page.getByRole('textbox', { name: 'authentication code' });
    await expect(otpInput).toBeVisible({ timeout: 10000 });
    console.log("🔹 Enter the OTP manually in the browser. Playwright will continue automatically."); // Wait up to 10s for the field to appear
    await page.getByRole('button', { name: 'Sign in' }).click();
    console.log('✅ Login successful with OTP!');

    await page.waitForTimeout(5000);
    await page.locator('header').getByRole('button').click();

    //Navigating to create a new Order
    await expect(page.getByRole('link', { name: 'New Order' })).toBeVisible();
    await page.getByRole('link', { name: 'New Order' }).click();
    
    
    //Selecting one of the Dsiplayed Restaurant
    await page.getByText('Americano, Lincoln ParkChicago, IL').click();
    await expect(page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' })).toBeVisible();
    await page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' }).click();

    await page.getByRole('tab', { name: 'All Products' }).click();

    await expect(page.getByRole('textbox', { name: 'Search All Products by name...' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Search All Products by name...' }).click();
    
    await expect(page.getByRole('textbox', { name: 'Search All Products by name...' })).toBeEditable();
    await page.getByRole('textbox', { name: 'Search All Products by name...' }).fill('chilli');
    
    await expect(page.getByRole('button', { name: 'Search' })).toBeEnabled();
    await page.getByRole('button', { name: 'Search' }).click();
    
    await page.waitForSelector('.flex.flex-col.items-start.py-4.px-8.w-full.overflow-auto', { timeout: 10000 });

    //Selecting the required item from the list
    
    await page.locator('.bg-zinc-800\\/90 > button').first().click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('10');
    

    await page.waitForSelector('button:has-text("Checkout")', { state: 'visible', timeout: 5000 });
    await page.getByRole('button', { name: 'Checkout' }).click();

    
    const sendEmailButton = page.getByRole('button', { name: 'Send Email Total: $' });
    //await sendEmailButton.scrollIntoViewIfNeeded();
    await sendEmailButton.click();
    
   

   // Assert that the "Send Email" button is visible and enabled, then click it
   
    await expect(page.getByRole('button', { name: 'Send Email' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Email' })).toBeEnabled();
    await page.getByRole('button', { name: 'Send Email' }).click();
    console.log("Email Sent Successfully");
    

// Assert that the "Return Ordering" button is visible and enabled, then click it
    await expect(page.getByRole('button', { name: 'Return Ordering' })).toBeEnabled();
    await page.getByRole('button', { name: 'Return Ordering' }).click();
    

});







