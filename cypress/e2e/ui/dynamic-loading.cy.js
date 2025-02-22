describe('Dynamic Loading Tests', () => {
    it('Should wait for an element to appear', () => {
      cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
      cy.get('button').click();
      cy.get('#loading', { timeout: 10000 }).should('not.exist');
      cy.get('#finish').should('contain', 'Hello World!');
    });
  });