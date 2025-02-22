describe('Download Tests', () => {
    it('Should download a file', () => {
      cy.visit('https://the-internet.herokuapp.com/download');
      cy.get('.example a').first().click();
      cy.readFile('cypress/downloads/some-file.txt').should('exist');
    });
  });