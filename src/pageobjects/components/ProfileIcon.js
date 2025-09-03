const logger = require('../../support/logger')

class ProfileIcon {
    get selectors() {
        return {
            profileIcon: 'android=new UiSelector().className("android.view.ViewGroup").instance(25)',
            signOutButton: 'android=new UiSelector().text("Sign Out")',
            logoutConfirmButton: '~Log out'
        }
    }

    get profileIcon() {
        return $(this.selectors.profileIcon)
    }

    get signOutButton() {
        return $(this.selectors.signOutButton)
    }

    get logoutConfirmButton() {
        return $(this.selectors.logoutConfirmButton)
    }

    async open() {
        logger.info('Opening profile menu')
        await this.profileIcon.click()
        logger.info('Profile menu opened')
    }

    async logout() {
        logger.info('Starting logout process')
        await this.open()
        const signOut = await this.signOutButton
        await driver.execute('mobile: scroll', {
            strategy: 'accessibility id',
            selector: 'Sign Out',
            maxSwipes: 10
        }).catch(() => { })

        if (!(await signOut.isDisplayed())) {
            await signOut.scrollIntoView()
        }

        await signOut.click()
        await this.logoutConfirmButton.click()
        logger.info('Logout process completed')
    }
}

module.exports = new ProfileIcon()
