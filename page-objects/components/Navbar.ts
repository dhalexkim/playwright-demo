import { expect, Locator, Page } from "@playwright/test";

export class Navbar {

    // Locators
    readonly page: Page
    readonly accountSummary: Locator
    readonly accountActivity: Locator
    readonly transferFunds: Locator
    readonly payBills: Locator
    readonly myMoneyApp: Locator
    readonly onlineStatement: Locator

    // Constructor
    constructor(page: Page) {
        this.page = page
        this.accountSummary = page.locator("#account_summary_tab")
        this.accountActivity = page.locator("#account_activity_tab")
        this.transferFunds = page.locator("#transfer_funds_tab")
        this.payBills = page.locator("#pay_bills_tab")
        this.myMoneyApp = page.locator("#money_map_tab")
        this.onlineStatement = page.locator("#online_statement_tab")
    }

    // Funcs
    async clickOnTab(tabName) {
        switch (tabName) {
            case "Account Summary":
                await this.accountSummary.click()
                break;
            case "Account Activity":
                await this.accountActivity.click()
                break;
            case "Transfer Funds":
                await this.transferFunds.click()
                break;
            case "Pay Bills":
                await this.payBills.click()
                break;
            case "My Money App":
                await this.myMoneyApp.click()
                break;
            case "Online Statement":
                await this.onlineStatement.click()
                break;
            default:
                throw new Error("this tab does not exist...")
        }
    }
}
