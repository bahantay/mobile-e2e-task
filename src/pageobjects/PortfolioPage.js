const BasePage = require('./BasePage')
const utils = require('../support/utils')
const logger = require('../support/logger')
const { AMOUNTS, TIMEOUTS } = require('../support/constants')

class PortfolioPage extends BasePage {
    get selectors() {
        return {
            portfolioTab: 'android=new UiSelector().resourceId("portfolio_tab")',
            headerAmount: 'android=new UiSelector().resourceId("portfolio_headerCard_title_text")',
            usdJpyPosition: 'android=new UiSelector().resourceId("orderCard_title_text").text("USDJPY")',
            noPositionsText: '//android.widget.TextView[@text="No open positions"]',
            tooltip: 'android=new UiSelector().resourceId("portfolio_orders_swipe_action_tooltip")'
        }
    }

    get portfolioTab() {
        return $(this.selectors.portfolioTab)
    }

    get usdJpyPosition() {
        return $(this.selectors.usdJpyPosition)
    }

    async open() {
        logger.info('Opening portfolio page')
        await this.portfolioTab.click()
        logger.info('Portfolio page opened')
    }

    async dismissTooltip(timeout = TIMEOUTS.DEFAULT) {
        logger.info('Dismissing portfolio tooltip')
        const tooltip = await $(this.selectors.tooltip)
        await tooltip.waitForDisplayed({ timeout })
        await utils.tapCoordinates(10, 100)
        logger.info('Portfolio tooltip dismissed')
    }

    async validateAmount5000() {
        logger.info(`Validating portfolio amount shows ${AMOUNTS.TRADE_AMOUNT}`)
        const el = await $(this.selectors.headerAmount)
        await el.waitForDisplayed()
        const txt = await el.getText()
        expect(txt).toContain(AMOUNTS.TRADE_AMOUNT)
        logger.info('Portfolio amount validation passed')
    }

    async openUSDJPYPosition() {
        logger.info('Opening USDJPY position')
        await this.usdJpyPosition.click()
        logger.info('USDJPY position opened')
    }

    async verifyNoPositions() {
        logger.info('Verifying no open positions')
        const element = await $(this.selectors.noPositionsText)
        await element.waitForDisplayed()
        logger.info('No open positions verification passed')
    }
}

module.exports = new PortfolioPage()
