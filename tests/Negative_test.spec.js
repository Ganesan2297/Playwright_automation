const {test, expect} = require ('@playwright/test')
import { text } from 'stream/consumers';
import Config4 from './Login/Config4.json';
test.describe.configure({ retries: 1 });


test.describe('❌ Negative Login Test Cases - GreenLight Grocery', () => {

      test('Invalid Username', async ({ page }) => {
      await page.goto(Config4.baseUrl);
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.getByRole('textbox', { name: 'name@host.com' }).fill(Config4.invalidCredentials.wrongUsername.username);
      await page.waitForTimeout(3000);
      await page.getByRole('textbox', { name: 'Password' }).fill(Config4.invalidCredentials.wrongUsername.password);
      await page.getByRole('button', { name: 'submit' }).click();
      await page.waitForTimeout(3000);
      
      const error = page.locator('text=Invalid Username and Password')
      console.log('❌ Login failed with invalid username');
    });
  
      test('Invalid Password', async ({ page }) => {
      await page.goto(Config4.baseUrl);
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.getByRole('textbox', { name: 'name@host.com' }).fill(Config4.invalidCredentials.wrongPassword.username);
      page.waitForTimeout(2000);
      await page.getByRole('textbox', { name: 'Password' }).fill(Config4.invalidCredentials.wrongPassword.password);
      await page.getByRole('button', { name: 'submit' }).click();
      await page.waitForTimeout(3000);
  
      //const error = page.locator('text=Invalid Username and Password')  
      console.log('❌ Login failed with invalid password');
    }); 
  
      test('Empty Credentials', async ({ page }) => {
      await page.goto(Config4.baseUrl);
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.getByRole('button', { name: 'submit' }).click();
      await page.waitForTimeout(2000);
      
  
      const error = page.locator('text=Please fill this field');
      console.log('❌ Login failed with empty credentials');
    }); 
  
  });



