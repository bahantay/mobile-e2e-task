# Fundix Mobile Automation Framework

E2E mobile automation framework for testing the **Fundix trading application** using **Appium + WebdriverIO**

## Prerequisites

Make sure you have the following installed:

- Node.js (v12+)
- Android SDK + ADB
- JDK ≥ 8
- Appium Server
- Android device/emulator

The mobile application shoudl also be installed via Google Play - https://play.google.com/store/apps/details?id=com.amega.fundix

## Setup
```bash
# Clone repository
git clone https://github.com/bahantay/mobile-e2e-task.git
cd mobile-e2e-task

# Install dependencies
npm install
npx appium driver install uiautomator2

# Verify that your device is connected:
adb devices

# Run test
npm run test
```

## Project Structure
```
src/
├── wdio.conf.js       # Configuration file
├── src/pageobjects    # Page Object Models
├── src/support        # Utility, Helpers classes
├── test/              # It includes data (test data) and specs (test cases) folders
└── package.json       # Dependencies
```

## Configuration

Update `src/config/capabilities.js` with your device details
```javascript
export const capabilities = {
  'appium:deviceName': 'YOUR_DEVICE_NAME',
  // ... other capabilities
};
```

Set environment variables:
```bash
# export credentials and set them as env vars
export FUNDIX_EMAIL= #user email
export FUNDIX_PASSWORD= #user password


# set device info
export UDID= #your device id
export DEVICE_NAME= #your device name
```

## Notes

Screenshots are automatically saved under **/screenshots** after each test.

All test execution logs are saved under: **/logs** folder.
You can check them after each run to debug or review test behavior.  
Logs include device info, Appium server output, and WebdriverIO reports.

### Demo Video
Watch the full execution demo here:  
[Fundix Automation Demo](https://drive.google.com/file/d/1QZF069-rF3IhxRE8XbGrjZZgnMJGtB7v/view?usp=sharing)