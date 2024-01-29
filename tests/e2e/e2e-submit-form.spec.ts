import { test, expect } from "@playwright/test";

test.describe("feedback form", () => {

    test.beforeEach(async({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#feedback")
    })

    test("reset feedback form",async ({page}) => {
        await page.fill("#name", "some name")
        await page.fill("#email", "some email")
        await page.fill("#subject", "some subject")
        await page.fill("#comment", "some comment")
        await page.click("input[name='clear']")
        await page.waitForTimeout(3000)
        const emailInput = page.locator("#email")
        const commentInput = page.locator("#comment")
        await expect(emailInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
    })

    test("submit feedback form",async ({page}) => {
        await page.fill("#name", "some name")
        await page.fill("#email", "some email")
        await page.fill("#subject", "some subject")
        await page.fill("#comment", "some comment")
        await page.click("input[type='submit']")
        await page.waitForURL("**\/sendFeedback.html")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/sendFeedback.html")
    })
})
