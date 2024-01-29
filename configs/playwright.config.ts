import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 3,
    use: {
        headless: true,
        viewport: { width: 800, height: 600},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
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
