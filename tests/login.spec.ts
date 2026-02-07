import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User should be able to login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.goToLoginSection();
    
    // Using a clear, valid test account
    await loginPage.login('testuser_1@test.com', 'password');

    // BETTER REPORTING: Check if an error message appears first
    const isErrorVisible = await loginPage.errorMessage.isVisible();
    if (isErrorVisible) {
        const message = await loginPage.errorMessage.textContent();
        // This will fail the test immediately with the actual error from the UI
        throw new Error(`Login failed with message: "${message}". Please check your credentials.`);
    }

    // Standard assertion with a custom failure message
    await expect(loginPage.userStatus, 'Should see "Logged in as" after successful login').toBeVisible({ timeout: 7000 });
});