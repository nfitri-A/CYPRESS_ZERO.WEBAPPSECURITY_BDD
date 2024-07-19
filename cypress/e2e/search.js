const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given ('when I browsed the website zeroapp', () => {
    cy.visit('http://zero.webappsecurity.com/index.html');
})

When ('search for a word online in the searchbox', () => {
    cy.get('#searchTerm').type('online {enter}')
})

Then ('successfully enter the search results page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})