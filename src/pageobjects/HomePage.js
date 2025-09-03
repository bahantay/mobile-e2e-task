const BasePage = require('./BasePage')
const logger = require('../support/logger')

class HomePage extends BasePage {
    get marketsTab() {
        return $('android=new UiSelector().resourceId("markets_tab")')
    }

    async openMarkets() {
        logger.info('Opening markets page')
        await this.marketsTab.click()
        logger.info('Markets page opened')
    }
}

module.exports = new HomePage()
