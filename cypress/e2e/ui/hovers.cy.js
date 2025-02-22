describe('Hover Tests', () => {
    it('Should display info on hover', () => {
      cy.visit('https://the-internet.herokuapp.com/hovers');
      cy.get('.figure').first().trigger('mouseover');
      cy.get('.figcaption').first().should('be.visible');
    });
  });