const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const BTN_PRIMARY = '.btn-primary';


class LoginPage {
    static visit() {
        cy.visit(URL);
    }

    static filUsername(username) {
        cy.get(USERNAME).type(username);
    }

    static filPassword(password) {
        cy.get(PASSWORD).type(password);
    }

    static BtnPrimary() {
        cy.get(BTN_PRIMARY).click();
    }
}

export default LoginPage;