import { test, expect } from '@playwright/test';
import * as userData from '../test-data/user.json';

test.describe('API: Login Verification', () => {

    test('should verify login successfully with valid credentials', async ({ request }) => {
        const { email, password } = userData.validUser;

        const response = await request.post('/api/verifyLogin', {
            form: {
                email: email,
                password: password
            }
        });

        // Requirement: Assert status code
        expect(response.status()).toBe(200);

        const responseBody = JSON.parse(await response.text());
        
        // Requirement: Assert response message and code in body
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.message).toBe('User exists!');
    });

    test('should return error message for invalid credentials', async ({ request }) => {
        const { email, password } = userData.invalidUser;

        const response = await request.post('/api/verifyLogin', {
            form: {
                email: email,
                password: password
            }
        });

        const responseBody = JSON.parse(await response.text());

        // Assertions for negative scenario
        expect(responseBody.responseCode).toBe(404);
        expect(responseBody.message).toBe('User not found!');
    });
});