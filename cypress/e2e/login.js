const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given ('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
})

When ('I submit login', () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('.btn-primary').click()
})

Then ('I Should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})