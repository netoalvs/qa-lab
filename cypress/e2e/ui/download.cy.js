describe('Download Tests', () => {
    it('Should download a file', () => {
      cy.visit('https://the-internet.herokuapp.com/download');
      cy.contains('a', 'bb.txt').click();
      cy.readFile('cypress/downloads/bb.txt').should('exist');
    });
  });