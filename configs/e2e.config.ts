import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 150000,
    retries: 0,
    testDir: "../tests/e2e",
    use: {
        headless: true,
        viewport: { width: 800, height: 600 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "only-on-failure",
    },
    projects: [
        {
            name: "Chromium",
            use: {browserName: "chromium"},
        },
        {
            name: "Firefox",
            use: {browserName: "firefox"},
        },
        {
            name: "Webkit",
            use: {browserName: "webkit"},
        }
    ]
}

export default config
