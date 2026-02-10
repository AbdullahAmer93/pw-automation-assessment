import { SettingsPage } from './mobile/pages/settings.page';

export const config = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },
    specs: ['./mobile/tests/**/*.test.ts'],
    maxInstances: 1,
    capabilities: [SettingsPage.capabilities],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: ['appium'],
    port: 4723,
    path: '/wd/hub',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};