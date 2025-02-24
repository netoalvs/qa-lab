describe('Dynamic Loading Tests', () => {
  it('Should wait for an element to appear', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
    
    cy.get('button').click();
    
    cy.get('#loading', { timeout: 10000 }).should('be.visible');
    cy.get('#loading', { timeout: 20000 }).should('not.be.visible');
    
    cy.get('#finish', { timeout: 20000 }).should('be.visible').and('contain', 'Hello World!');
  });
});
