const logger = require('../support/logger')

class BasePage {
    get skipButton() {
        return $('android=new UiSelector().text("Skip")')
    }

    async dismissNotificationsPopup() {
        logger.info('Dismissing enabling notification popup')
        await this.skipButton.click()
        logger.info('Popup dismissal completed')
    }
}

module.exports = BasePage
