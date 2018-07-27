const capabilities = {
  local_ios: {
    platformName: 'iOS',
    deviceName: 'iPhone X',
    automationName: 'XCUITest',
    app: '/Users/jmrodriguez/dev/medium/react_native_appium/ios/build/Build/Products/Release-iphonesimulator/rnappium.app.zip',
  },
  local_android: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: '/Users/jmrodriguez/dev/medium/react_native_appium/android/app/build/outputs/apk/app-release.apk'
  },
  remote_ios: {
    platformName: 'iOS',
    platformVersion: '11.0',
    deviceName: 'iPhone X',
    automationName: 'XCUITest',
    app: 'sauce-storage:app-release.app.zip',
  },
  remote_android: {
    platformName: 'Android',
    platformVersion: '7.1',
    deviceName: 'Android GoogleAPI Emulator',
    app: 'sauce-storage:app-release.apk',
  },
};

if (!process.env.E2E_DEVICE) {
    throw new Error('E2E_DEVICE environment variable is not defined');
}

if (!capabilities[process.env.E2E_DEVICE]) {
    throw new Error(`Capabilities not found for E2E_DEVICE environment ${process.env.E2E_DEVICE}`);
}

export default capabilities[process.env.E2E_DEVICE];
