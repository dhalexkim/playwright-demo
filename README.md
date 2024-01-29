# playwright-demo

## playwright setup

Type following from your test project folder

```sh
> npm init
> npm install @playwright/test
> npx playwright install
> npx playwright install-deps
```

## playwright test structure

```sh
├── configs
│   ├── e2e.config.ts
│   └── playwright.config.ts
├── package.json
├── package-lock.json
├── page-objects
│   ├── components
│   │   └── Navbar.ts
│   ├── HomePage.ts
│   └── LoginPage.ts
├── playwright-report
│   └── index.html
├── playwright-screenshots
│   ├── screenshot.png
│   └── screenshot-single.png
├── README.md
├── test-results
└── tests
    ├── e2e
    │   ├── e2e-login.spec.ts
    │   ├── e2e-search.spec.ts
    │   └── e2e-submit-form.spec.ts
    └── example
        ├── example.spec.ts
        └── helpers.ts
```

### test script execution

can run test using following defined playwright scripts from package.json

```sh
> npm run tests:webkit -- --headed
> npm run tests:e2e
> npx playwright test ./tests/e2e/e2e-submit-form.spec.ts
> ...
> ...
> ...
```
