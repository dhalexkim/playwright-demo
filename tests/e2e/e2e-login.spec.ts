import {  test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage"

test.describe.parallel.only("login / logout flow", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    // before hook
    test.beforeEach(async({page})=> {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        await homePage.visit()
    })
    test.afterEach(async({page})=> {
        await loginPage.logout()
    })
    // negative flow
    test("negative login flow", async({page}) => {
        await homePage.clickOnSignin()
        await loginPage.login("invalid user", "invalid password")
        await loginPage.assertErrorMessage()
     })
    // positive flow with workaround
    test("positive login flow", async({page}) => {
        await homePage.clickOnSignin()
        await loginPage.login("username", "password")
        await loginPage.loginPatch(page)
        const accountSummaryTab = page.locator("#account_summary_tab")
        await expect(accountSummaryTab).toBeVisible()
    })
})