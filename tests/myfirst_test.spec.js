const { test, expect } = require('@playwright/test');
//const { authenticator } = require('otplib');
const config = require('./Login/Config.json'); // Import JSON configuration
test.describe.configure({ retries: 1 });

test('Login Test with Happy Path', async ({ page }) => {
    await page.goto(config.baseUrl);
    await expect(page).toHaveTitle('GreenLight Grocery');

    // Click Sign In
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Sign In' }).hover();
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
    await page.locator('header').getByRole('button').hover();
    await page.locator('header').getByRole('button').click();

    //Navigating to create a new Order
    await expect(page.getByRole('link', { name: 'New Order' })).toBeVisible();
    await page.getByRole('link', { name: 'New Order' }).hover();
    await page.getByRole('link', { name: 'New Order' }).click();
    
    
    //Selecting one of the Dsiplayed Restaurant
    await page.getByText('Americano, Lincoln ParkChicago, IL').click();
    await expect(page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' })).toBeVisible();
    await page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' }).hover();
    await page.getByRole('option', { name: 'The Taco Stop Fort Collins, CT' }).click();

    //Clicking on ALL PRODUCTS
    await page.getByRole('tab', { name: 'All Products' }).click();

    await expect(page.getByRole('textbox', { name: 'Search All Products by name...' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Search All Products by name...' }).click();
    
    //Searching for Product
    await expect(page.getByRole('textbox', { name: 'Search All Products by name...' })).toBeEditable();
    await page.getByRole('textbox', { name: 'Search All Products by name...' }).fill('chilli');
    
    //clicking on Search Button
    await expect(page.getByRole('button', { name: 'Search' })).toBeEnabled();
    await page.getByRole('button', { name: 'Search' }).click();
    
    //Waiting for Products to be displayed
    await page.waitForSelector('.flex.flex-col.items-start.py-4.px-8.w-full.overflow-auto', { timeout: 10000 });

    //Selecting the required item from the list
    
    await expect(page.locator('.bg-zinc-800\\/90 > button').first()).toBeVisible({ timeout: 10000 }).then(() => page.locator('.bg-zinc-800\\/90 > button').first().click());
    //await page.locator('.bg-zinc-800\\/90 > button').first().click();
    await expect(page.getByRole('textbox').nth(1)).toBeEnabled();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('10');
    
  //Checkout 
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible({ timeout: 5000 });
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeEnabled();
    await page.getByRole('button', { name: 'Checkout' }).click();
  

    //Email page and send Email
    await expect(page.getByRole('button', { name: 'Send Email Total: $' })).toBeEnabled();
    await page.getByRole('button', { name: 'Send Email Total: $' }).click();
    await page.waitForTimeout(1000);
    await expect(page.getByRole('button', { name: 'Send Email' })).toBeVisible();
    await page.getByRole('button', { name: 'Send Email' }).hover();
    await page.getByRole('button', { name: 'Send Email' }).click();
    await page.waitForTimeout(1000);
    console.log("Email Sent Successfully");
    await page.waitForTimeout(1000);
    

// Assert that the "Return Ordering" button is visible and enabled, then click it
    await expect(page.getByRole('button', { name: 'Return Ordering' })).toBeEnabled();
    await page.getByRole('button', { name: 'Return Ordering' }).hover();
    await page.getByRole('button', { name: 'Return Ordering' }).click();
    

});


//Page - Refers to a single tab or a popup window within browser context.Used to Navigate to URL's and interact with page
//Expect - Assertion Lib for Javascript
//Async - Return a Promise
//Await - Only Used inside a function , pause the execution until the promise is resolved.
//Test - This is a function used to define and run a test case.
//const - It’s used in JavaScript to declare a variable whose value won’t be reassigned.
//Get by role - A smart way to find elements on a web page based on their accessibility role.
//Locator - Way to identify elements on a page.ID,name,ClassName,Tag Name, css selector , and Xpath







