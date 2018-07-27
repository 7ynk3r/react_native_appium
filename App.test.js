import wd from 'wd';
import server from './test-config/server';
import capabilities from './test-config/capabilities';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 60 * 1000;

const driver = wd.promiseChainRemote(server.url, server.port);

describe('App', () => {
  beforeAll(async () => {
    try {
      await driver.init(capabilities);
      await driver.sleep(2 * 1000); // wait for app to load
    }
    catch(error) {
      console.error(error);
    }
  });

  afterAll(async () => {
    try {
      await driver.quit();
    }
    catch(error) {
      console.error(error);
    }
  });

  it('should render correctly', async () => {
    expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  });
})
