import { test, expect } from "@playwright/test";
import { loadHomepage, assertTitle } from "./helpers";

test("Simple basic test", async ({page}) => {
    await page.goto("https://www.example.com")
    const pageTitle = page.locator("html body div h1")
    await expect(pageTitle).toContainText("Example Domain")
})

test("Click on Elements @Assertion", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")
    await page.click("text=Sign in")
    const errorMsg = page.locator(".alert-error")
    await expect(errorMsg).toContainText("Login and/or password are wrong.")
})

test.skip("Selectors,Not test", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button") // tag type: ID
    await page.click("text=Sign in") // tag type: Text
    await page.click("button h1") // tag type: element
    await page.click(".class") // tag type: class
    await page.click(".class:visible") // tag type: visible class
    await page.click("//button") // xPATH example
})

test.describe("two tests @Assertion", () => {
    test("working with inputs", async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#signin_button")
        await page.fill("#user_login", "some user")
        await page.fill("#user_password", "some password")
        await page.click("text=Sign in")
        const errorMsg = page.locator(".alert-error")
        await expect(errorMsg).toContainText("Login and/or password are wrong.")
    })

    test("assertion", async ({page}) => {
        await page.goto("https://www.example.com")
        await expect(page).toHaveURL("https://www.example.com")
        await expect(page).toHaveTitle("Example Domain")
        const pageTitle = page.locator("html body div h1")
        await expect(pageTitle).toBeVisible()
        await expect(pageTitle).toHaveText("Example Domain")
        await expect(pageTitle).toHaveCount(1)
        const nonExistingElement = page.locator("h5")
        await expect(nonExistingElement).not.toBeVisible()
    })
} )

test("screenshots", async ({page}) => {

    await page.goto("https://www.example.com")
    await page.screenshot({path: "./playwright-screenshots/screenshot.png", fullPage:true})
})

test("screenshots-single element", async ({page}) => {

    await page.goto("https://www.example.com")
    const element = page.locator("h1")
    await element.screenshot({path: "./playwright-screenshots/screenshot-single.png"})
})

test.describe.parallel("Hooks", () => {

    test.beforeEach(async({page}) => {
        await page.goto("https://www.example.com")
    })

    test("screenshots", async ({page}) => {
        await page.screenshot({path: "./playwright-screenshots/screenshot.png", fullPage:true})
    })

    test("screenshots-Single Element", async ({page}) => {
        const element = page.locator("h1")
        await element.screenshot({path: "./playwright-screenshots/screenshot-single.png"})
    })
})

test.skip("Custom helper", async ({page}) => {

    await loadHomepage(page)
    await page.pause()
    await assertTitle(page)
})
