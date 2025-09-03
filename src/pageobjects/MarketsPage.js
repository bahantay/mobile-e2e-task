const BasePage = require('./BasePage')
const utils = require('../support/utils')
const logger = require('../support/logger')

class MarketsPage extends BasePage {
    async openUsdJpyPair() {
        logger.info('Opening USD-JPY trading pair')
        const el = await utils.scrollToElement('markets_listItem_card_27')
        await el.waitForDisplayed()
        // cannot click on it until element gets stable after scroll
        await driver.pause(300)
        await el.click()
        logger.info('USD-JPY pair opened successfully')
    }
}

module.exports = new MarketsPage()
