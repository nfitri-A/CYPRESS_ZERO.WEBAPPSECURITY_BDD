import LoginPage from './login.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given ('I open login page', () => {
    LoginPage.visit();
})

When ('I submit login', () => {
    LoginPage.filUsername('username');
    LoginPage.filPassword('password');
    LoginPage.BtnPrimary()
    
})

Then ('I Should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})