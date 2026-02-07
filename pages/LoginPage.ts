import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly userStatus: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('a[href="/login"]');
        this.emailInput = page.locator('[data-qa="login-email"]');
        this.passwordInput = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
        this.userStatus = page.locator('li:has-text("Logged in as")');
        this.errorMessage = page.locator('[style="color: red;"]'); 
    }

    async navigate() {
        await this.page.goto('/');
    }

    async goToLoginSection() {
        await this.loginLink.click();
    }

    async login(email: string, pass: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}