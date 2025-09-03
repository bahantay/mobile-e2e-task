const logger = require('./logger')

const utils = {
    async scrollToElement(resourceId) {
        logger.info(`Scrolling to element: ${resourceId}`)
        const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("${resourceId}"))`
        const element = await $(selector)
        logger.info(`Successfully scrolled to: ${resourceId}`)
        return element
    },

    async tapCoordinates(x, y) {
        logger.info(`Tapping coordinates: (${x}, ${y})`)
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x, y },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }])
        await driver.releaseActions()
        logger.info(`Successfully tapped at: (${x}, ${y})`)
    }
}

module.exports = utils
