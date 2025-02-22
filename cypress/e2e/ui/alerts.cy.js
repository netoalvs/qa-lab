describe('Alert Tests', () => {
    it('Should handle a JS alert', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
      cy.get('button').contains('Click for JS Alert').click();
      cy.on('window:alert', (text) => {
        expect(text).to.eq('I am a JS Alert');
      });
    });
  });