import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    // Define Selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator("#user_login")
        this.passwordInput = page.locator("#user_password")
        this.submitButton = page.locator("text=Sign in")
        this.errorMessage = page.locator(".alert-error")
    }

    async logout() {
        await this.page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(this.page).toHaveURL("http://zero.webappsecurity.com/index.html")
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async loginPatch(page: Page) {
        await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html")
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText("Login and/or password are wrong.")
    }
}
