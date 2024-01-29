import { test, expect } from "@playwright/test";

test.describe("Search Results", () => {
    test("Should find search results", async({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.type("#searchTerm", "bank")
        await page.keyboard.press("Enter")

        const links = page.locator("li > a")
        await expect(links).toHaveCount(2)
    })
})