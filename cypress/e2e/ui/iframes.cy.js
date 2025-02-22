describe('Iframe Tests', () => {
    it('Should interact with an iframe', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe');
      cy.get('#mce_0_ifr').then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).type('Text inside iframe');
        cy.wrap($body).should('contain', 'Text inside iframe');
      });
    });
  });