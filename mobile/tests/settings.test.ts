import { expect } from 'chai';
import SettingsPage from '../pages/settings.page';

describe('Settings App - Page Transition Test', function () {
    this.timeout(300000);

    it('should tap Connected devices and assert page transition', async () => {
        await SettingsPage.tapConnectedDevices();
        const isVisible = await SettingsPage.isConnectedDevicesPageVisible();
        expect(isVisible).to.be.true;
    });
});