const BasePage = require('./BasePage')
const logger = require('../support/logger')

class AssetDetailsPage extends BasePage {
    get selectors() {
        return {
            oneHourButton: '~1H',
            sellButton: 'android=new UiSelector().resourceId("assetDetails_sell_button")',
            amount5000Button: 'android=new UiSelector().resourceId("buySellSheet_amount_card_0")',
            sellNowButton: 'android=new UiSelector().resourceId("buySellSheet_sell_button")'
        }
    }

    get oneHourDuration() {
        return $(this.selectors.oneHourButton)
    }

    get sellBtn() {
        return $(this.selectors.sellButton)
    }

    get amount5000() {
        return $(this.selectors.amount5000Button)
    }

    get sellNowBtn() {
        return $(this.selectors.sellNowButton)
    }

    async sellAmount5000() {
        logger.info('Starting sell order for $5000 in 1 hour duration')
        await this.oneHourDuration.click()
        await this.sellBtn.click()
        await this.amount5000.click()
        await this.sellNowBtn.click()
        logger.info('Sell order completed')
    }
}

module.exports = new AssetDetailsPage()
