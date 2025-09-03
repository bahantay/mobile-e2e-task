const BasePage = require('./BasePage')
const logger = require('../support/logger')
const utils = require('../support/utils')

class LoginPage extends BasePage {
    get selectors() {
        return {
            emailField: 'android=new UiSelector().resourceId("login_email_input")',
            passwordField: 'android=new UiSelector().resourceId("login_password_input")',
            submitButton: 'android=new UiSelector().resourceId("login_button")'
        }
    }

    get emailField() {
        return $(this.selectors.emailField)
    }

    get passwordField() {
        return $(this.selectors.passwordField)
    }

    get submitButton() {
        return $(this.selectors.submitButton)
    }

    async login(email, password) {
        logger.info(`Starting login process for user: ${email}`)
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
        await this.dismissNotificationsPopup();
        logger.info('Login process completed')
    }

    async verifyLoginPage() {
        logger.info('Verifying login page is displayed')
        await expect(this.submitButton).toBeDisplayed()
        logger.info('Login page verification completed')
    }
}

module.exports = new LoginPage()
