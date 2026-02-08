import { test, expect } from './fixtures';
import * as userData from '../test-data/user.json';

test.describe('Login Functionality', () => {
    
    test('User should be able to login with valid credentials', async ({ loginPage }) => {
        const { email, password } = userData.validUser;

        await loginPage.navigate();
        await loginPage.goToLoginSection();
        await loginPage.login(email, password);

        // Assertions
        await expect(loginPage.userStatus).toBeVisible();
        await expect(loginPage.userStatus).toContainText(userData.validUser.username);
    });

    test('User should see error with invalid credentials', async ({ loginPage }) => {
        const { email, password } = userData.invalidUser;

        await loginPage.navigate();
        await loginPage.goToLoginSection();
        await loginPage.login(email, password);

        // Assert error message is visible
        await expect(loginPage.errorMessage).toBeVisible();
    });
});