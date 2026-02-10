import { browser } from '@wdio/globals';

export class SettingsPage {
    // Locators
    get connectedDevicesOption() {
        return browser.$('//android.widget.TextView[@text="Connected devices"]');
    }

    get pairNewDeviceTitle() {
        return browser.$('//android.widget.TextView[@text="Pair new device"]');
    }

    // Actions
    async tapConnectedDevices() {
        await this.connectedDevicesOption.waitForDisplayed({ timeout: 5000 });
        await this.connectedDevicesOption.click();
    }

    async isConnectedDevicesPageVisible(): Promise<boolean> {
        return this.pairNewDeviceTitle.isDisplayed();
    }

    // Appium capabilities for Settings app
    static get capabilities(): WebdriverIO.Capabilities {
        return {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Pixel_7_API_34',
            'appium:appPackage': 'com.android.settings',
            'appium:appActivity': 'com.android.settings.Settings',
            'appium:noReset': true
        };
    }
}

export default new SettingsPage();