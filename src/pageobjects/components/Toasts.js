const { MESSAGES, TIMEOUTS } = require('../../support/constants')
const logger = require('../../support/logger')

class Toasts {
    get toastText() {
        return $('android=new UiSelector().resourceId("toastText1")')
    }

    async expectMessage(expectedMessage) {
        logger.info(`Expecting toast message: ${expectedMessage}`)
        const element = await this.toastText
        await element.waitForDisplayed({ timeout: TIMEOUTS.DEFAULT })
        const text = await element.getText()
        expect(text).toContain(expectedMessage)
        logger.info(`Toast message validation passed: ${text}`)
    }

    async expectOpenSuccess() {
        await this.expectMessage(MESSAGES.POSITION_OPENED)
    }

    async expectCloseSuccess() {
        await this.expectMessage(MESSAGES.POSITION_CLOSED)
    }
}

module.exports = new Toasts()
