# pw-automation-assessment

A comprehensive automation testing framework featuring **Playwright** for web/API testing and **Appium + WebdriverIO** for mobile testing. This project demonstrates end-to-end testing capabilities with clean architecture using the Page Object Model (POM) design pattern.

## 🎯 Project Overview

This project provides automated test coverage for:
- **Web UI Testing:** [Automation Exercise](https://www.automationexercise.com) website
- **API Testing:** Backend API verification
- **Mobile Testing:** Android native app automation (Settings app)

## 🛠️ Tech Stack

### Web & API Testing
- **Testing Framework:** Playwright v1.58.2
- **Language:** TypeScript
- **Design Pattern:** Page Object Model (POM)
- **Reporter:** HTML Reports

### Mobile Testing
- **Testing Framework:** WebdriverIO with Appium
- **Automation Engine:** Appium (UiAutomator2)
- **Test Framework:** Mocha
- **Assertion Library:** Chai
- **Platform:** Android

## 📁 Project Structure

```
pw-automation-assessment/
├── pages/                  # Web Page Object Models
│   └── LoginPage.ts        # Login page object with locators and methods
├── tests/                  # Web UI test specifications
│   ├── fixtures.ts         # Custom Playwright fixtures
│   └── login.spec.ts       # UI login tests
├── api/                    # API test specifications
│   └── login-api.spec.ts   # API login verification tests
├── mobile/                 # Mobile automation (Appium + WDIO)
│   ├── pages/
│   │   └── settings.page.ts   # Settings page object for Android
│   └── tests/
│       └── settings.test.ts   # Mobile test specs
├── test-data/              # Test data files
│   └── user.json           # User credentials (valid & invalid)
├── playwright.config.ts    # Playwright configuration
├── wdio.mobile.conf.ts     # WebdriverIO configuration for mobile
└── package.json            # Project dependencies
```

## ✨ Features

### Web & API Testing
- ✅ **Cross-browser testing** - Chromium, Firefox, and WebKit support
- ✅ **Page Object Model** - Clean separation of test logic and page interactions
- ✅ **Custom fixtures** - Reusable test setup with Playwright fixtures
- ✅ **API testing** - Comprehensive API endpoint validation
- ✅ **Screenshot on failure** - Automatic screenshots for debugging
- ✅ **Parallel execution** - Fast test execution with parallel test runs
- ✅ **HTML reporting** - Built-in HTML test reports
- ✅ **Trace on retry** - Detailed trace files for failed test analysis

### Mobile Testing
- ✅ **Native Android automation** - Using Appium + WebdriverIO
- ✅ **Page Object Model** - Consistent design pattern across platforms
- ✅ **UiAutomator2** - Modern Android automation engine
- ✅ **Flexible capabilities** - Easy device/emulator configuration

## 🚀 Getting Started

### Prerequisites

#### For Web & API Testing:
- Node.js (v14 or higher)
- npm or yarn

#### For Mobile Testing:
- Java JDK (v8 or higher)
- Android SDK
- Appium Server (v2.x)
- Android Emulator or Physical Device

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AbdullahAmer93/pw-automation-assessment.git
cd pw-automation-assessment
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

4. For mobile testing, install Appium:
```bash
npm install -g appium
appium driver install uiautomator2
```

## 🧪 Running Tests

### Web & API Tests (Playwright)

#### Run all web tests
```bash
npx playwright test
```

#### Run specific test file
```bash
npx playwright test tests/login.spec.ts
npx playwright test api/login-api.spec.ts
```

#### Run tests in headed mode
```bash
npx playwright test --headed
```

#### Run tests in specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

#### Run tests in debug mode
```bash
npx playwright test --debug
```

#### View HTML report
```bash
npx playwright show-report
```

### Mobile Tests (Appium + WDIO)

#### Start Appium server
```bash
appium
```

#### Run mobile tests (in a new terminal)
```bash
npx wdio run wdio.mobile.conf.ts
```

## 📋 Test Cases

### Web UI Tests (Login)
- ✅ User login with valid credentials
- ✅ User login with invalid credentials (negative test)

### API Tests (Login Verification)
- ✅ Verify login API with valid credentials (status code & response body)
- ✅ Verify login API with invalid credentials (error handling)

### Mobile Tests (Android Settings)
- ✅ Navigate to "Connected devices" and verify page transition

## ⚙️ Configuration Highlights

### Playwright Configuration (`playwright.config.ts`)
- **Base URL:** `https://www.automationexercise.com`
- **Screenshot:** Enabled for all tests
- **Trace:** Captured on first retry
- **Parallel execution:** Enabled
- **Test Ignore:** Excludes `mobile/` directory
- **CI/CD ready:** Optimized settings for CI environments

### WebdriverIO Configuration (`wdio.mobile.conf.ts`)
- **Platform:** Android
- **Automation:** UiAutomator2
- **Device:** Pixel 7 API 34 (configurable)
- **App Package:** `com.android.settings`
- **Appium Port:** 4723

## 🔧 Mobile Setup

### Android Emulator Setup
1. Open Android Studio
2. Create/Start an AVD (e.g., Pixel 7 API 34)
3. Verify device is running:
```bash
adb devices
```

### Update Mobile Capabilities
Edit `mobile/pages/settings.page.ts` to match your device:
```typescript
static get capabilities(): WebdriverIO.Capabilities {
    return {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'YOUR_DEVICE_NAME',
        'appium:appPackage': 'com.android.settings',
        'appium:appActivity': 'com.android.settings.Settings',
        'appium:noReset': true
    };
}
```

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## 📝 License

ISC

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [WebdriverIO Documentation](https://webdriver.io/)
- [Appium Documentation](https://appium.io/docs/en/latest/)

---

**Note:** Make sure to keep sensitive credentials secure and avoid committing them to version control. Consider using environment variables for sensitive data.