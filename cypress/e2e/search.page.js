const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH_TERM = '#searchTerm';
const SEARCH_RESULT = 'h2'

class SearchPage {
    static visit() {
        cy.visit(URL);
    }

    static searchTerm(online) {
        cy.get(SEARCH_TERM).type('online {enter}')
    }

}

export default SearchPage