describe('Search Tests', () => {
    it('Should search for "Dynamic Loading"', () => {
      cy.visit('https://the-internet.herokuapp.com');
      cy.get('input[type="search"]').type('Dynamic Loading{enter}');
      cy.get('.results').should('contain', 'Dynamic Loading');
    });
  });