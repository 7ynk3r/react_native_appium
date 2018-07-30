# React Native E2E Testing with Appium on Sauce Labs

This code was created based on https://medium.com/@7ynk3r/react-native-e2e-testing-with-appium-on-sauce-labs-8920195b8a54

## Setup

1. Install all depedencies: `yarn`
1. Create the release versions
    1. iOS: `react-native run-ios --configuration Release`
    1. Android: `react-native run-android --variant=release`
1. Create an account in Sauce Labs 
1. Get your user name and access key at https://saucelabs.com/beta/user-settings
1. Create `secret.json` at the root level with 
```
{
  "YOUR_SAUCE_USERNAME": "[USER_NAME]",
  "YOUR_SAUCE_ACCESS_KEY": "[USER_ACCESS_KEY]"
}
```

## Running the tests 

### Locally 

1. Update `test-config/capabilities.js` with the **absolute** `app` paths for each platform.
1. Start the appium server: `yarn appium`
1. **[Android]** Start an Android device (make sure is visible using `adb`).
1. Run the tests
    1. iOS: `TEST_CONFIG=local_ios yarn test`
    1. Android: `TEST_CONFIG=local_android yarn test`
    
### Remotely with Sauce Labs

1. Upload the apps to Sauce Labs 
    ```
    curl -u "[USER_NAME]:[USER_ACCESS_KEY]" -X POST -H "Content-Type: application/octet-stream" https://saucelabs.com/rest/v1/storage/[USER_NAME]/[APP_NAME].apk?overwrite=true --data-binary @[ABSOLUTE_APP_BUILD_PATH]
    ```
1. Verify that uploaded apps
    ```
    curl -u "[USER_NAME]:[USER_ACCESS_KEY]" https://saucelabs.com/rest/v1/storage/[USER_NAME]
    ```
1. Update `test-config/capabilities.js` with the `app` paths for each platform.
1. Run the tests
    1. iOS: `TEST_CONFIG=remote_ios yarn test`
    1. Android: `TEST_CONFIG=remote_android yarn test` 
