import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 60 * 1000;


// ios local
// zip -r rnappium.app.zip rnappium.app
const PORT = 4723;
const config = {
  platformName: 'iOS',
  deviceName: 'iPhone X',
  automationName: 'XCUITest',
  app: '/Users/jmrodriguez/dev/medium/react_native_appium/ios/build/Build/Products/Release-iphonesimulator/rnappium.app.zip',
};
const driver = wd.promiseChainRemote('localhost', PORT);

// // ios remote
// import secret from '../secret.json'
// const { YOUR_SAUCE_USERNAME, YOUR_SAUCE_ACCESS_KEY } = secret;
// const driver = wd.promiseChainRemote("https://" + YOUR_SAUCE_USERNAME + ":" + YOUR_SAUCE_ACCESS_KEY + "@" + "ondemand.saucelabs.com:443/wd/hub");
// const config = {
//   platformName: 'iOS',
//   platformVersion: '11.0',
//   deviceName: 'iPhone X',
//   automationName: 'XCUITest',
//   app: 'sauce-storage:app-release.app.zip',
// };


// // android local
// const PORT = 4723;
// const config = {
//   platformName: 'Android',
//   deviceName: 'Android Emulator',
//   app: '/Users/jmrodriguez/dev/medium/react_native_appium/android/app/build/outputs/apk/app-release.apk'
// };
// const driver = wd.promiseChainRemote('localhost', PORT);


// // android remote
// import secret from '../secret.json'
// const { YOUR_SAUCE_USERNAME, YOUR_SAUCE_ACCESS_KEY } = secret;
// const driver = wd.promiseChainRemote("https://" + YOUR_SAUCE_USERNAME + ":" + YOUR_SAUCE_ACCESS_KEY + "@" + "ondemand.saucelabs.com:443/wd/hub");
// const config = {
//   platformName: 'Android',
//   platformVersion: '7.1',
//   deviceName: 'Android GoogleAPI Emulator',
//   app: 'sauce-storage:app-release.apk',
// };


describe('App', () => {
  beforeAll(async () => {
    try {
      console.log('initilizing driver')
      await driver.init(config);
      console.log('sleeping')
      await driver.sleep(2 * 1000); // wait for app to load
    }
    catch(error) {
      console.error(error);
    }
  })

  afterAll(async () => {
    try {
      console.log('quiting driver')
      await driver.quit();
    }
    catch(error) {
      console.error(error);
    }
  })

  it('should render correctly', async () => {
    expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  });

})
