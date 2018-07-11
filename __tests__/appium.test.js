import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 60 * 1000;

// // local
// const PORT = 4723;
// const config = {
//   platformName: 'Android',
//   deviceName: 'Android Emulator',
//   app: '/Users/jmrodriguez/dev/medium/react_native_appium/android/app/build/outputs/apk/app-release.apk'
//   // app: '/Users/jmrodriguez/dev/medium/react_native_appium/android/app/build/outputs/apk/app-debug.apk'
// };
// const driver = wd.promiseChainRemote('localhost', PORT);


// remote 2
import secret from '../secret.json'
const { YOUR_SAUCE_USERNAME, YOUR_SAUCE_ACCESS_KEY } = secret;
const driver = wd.promiseChainRemote("https://" + YOUR_SAUCE_USERNAME + ":" + YOUR_SAUCE_ACCESS_KEY + "@" + "ondemand.saucelabs.com:443/wd/hub");
const config = {
  platformName: 'Android',
  deviceName: 'Android GoogleAPI Emulator',
  platformVersion: '7.1',
  // app: 'sauce-storage:app-debug.apk',
  app: 'sauce-storage:app-release.apk',
  appiumVersion: '1.8.0',
};

beforeAll(async () => {
  console.log('beforeAll')
  try {
    await driver.init(config);
    console.log('sleeping')
    await driver.sleep(10 * 1000); // wait for app to load
    console.log('sleep done')
  }
  catch(error) {
    console.error(error);
  }
})

afterAll(async () => {
  console.log('afterAll')
  await driver.quit();
})

test('appium renders', async () => {
  console.log('test')
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
});
