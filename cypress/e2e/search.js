import SearchPage from './search.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given ('when I browsed the website zeroapp', () => {
    SearchPage.visit()
})

When ('search for a word online in the searchbox', () => {
    SearchPage.searchTerm('online {enter}');
})

Then ('successfully enter the search results page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})