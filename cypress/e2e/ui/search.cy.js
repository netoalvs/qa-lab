describe('Search Tests', () => {
  it('Should search for "Cypress" on Wikipedia', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('input[name="search"]').type('Cypress{enter}');

    cy.origin('https://en.wikipedia.org', () => {
      cy.get('#firstHeading').should('contain', 'Cypress');
    });
  });
});
