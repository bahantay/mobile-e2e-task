const BasePage = require('./BasePage')
const logger = require('../support/logger')

class PositionDetailsPage extends BasePage {
    get selectors() {
        return {
            closeButton: '~Close',
            confirmCloseButton: 'android=new UiSelector().resourceId("closePosition_confirm_button")'
        }
    }

    get closeButton() {
        return $(this.selectors.closeButton)
    }

    get confirmCloseButton() {
        return $(this.selectors.confirmCloseButton)
    }

    async closePosition() {
        logger.info('Closing position')
        await this.closeButton.click()
        await this.confirmCloseButton.click()
        logger.info('Position closed successfully')
    }
}

module.exports = new PositionDetailsPage()
