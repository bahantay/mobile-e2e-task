const BasePage = require('./BasePage')
const logger = require('../support/logger')
const utils = require('../support/utils')

class LandingPage extends BasePage {
    get signInButton() {
        return $('android=new UiSelector().resourceId("onboarding_login_button")')
    }

    // for some reason element takes too much time to get it (40-50 sec)
    async goToLogin() {
        logger.info('Navigating to login page by element')
        await this.signInButton.click()
        logger.info('Navigation to login completed')
    }

    // alternatively to save time was decided to use this method
    async goToLoginByCoordinates() {
        logger.info('Navigating to login page by touching coordinates')
        await this.waitForApp()
        await utils.tapCoordinates(540, 2076)
        logger.info('Navigation to login completed')
    }

    async waitForApp() {
        logger.info('Waiting for app to load')
        await driver.waitUntil(async () => {
            const activity = await driver.getCurrentActivity()
            return activity === '.MainActivity'
        }, { timeout: 60000 })
        await driver.pause(1000)
        logger.info('App loaded successfully')
    }
}

module.exports = new LandingPage()
