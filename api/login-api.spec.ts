import { test, expect } from '@playwright/test';

test.describe('API: Login Verification', () => {
    
    // Test Case: Valid Credentials
    test('should verify login successfully with valid credentials', async ({ request }) => {
        const response = await request.post('/api/verifyLogin', {
            form: {
                email: 'testuser_1@test.com', // Ensure this user is registered
                password: 'password'
            }
        });

        
        expect(response.status()).toBe(200);

        const responseBody = JSON.parse(await response.text());
        
        // Requirement: Assert response message
        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.message).toBe('User exists!');
    });

    // Negative test with invalid credentials
    test('should return error message for invalid credentials', async ({ request }) => {
        const response = await request.post('/api/verifyLogin', {
            form: {
                email: 'nonexistent_user@test.com',
                password: 'wrongpassword'
            }
        });

        const responseBody = JSON.parse(await response.text());

        // Assertions for failure state
        expect(responseBody.responseCode).toBe(404);
        expect(responseBody.message).toBe('User not found!');
    });
});