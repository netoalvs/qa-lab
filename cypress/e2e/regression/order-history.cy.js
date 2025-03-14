describe('Order History Regression Test', () => {
  it('should display order history correctly', () => {
    cy.login(Cypress.env('SAUCEDEMO_USER'), Cypress.env('SAUCEDEMO_PASSWORD'));
    cy.visit('/orders');
    cy.get('.order-item').should('have.length.greaterThan', 0);
  });
});
