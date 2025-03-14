describe('Cart Unit Test', () => {
  it('should clear the cart', () => {
    cy.login(Cypress.env('SAUCEDEMO_USER'), Cypress.env('SAUCEDEMO_PASSWORD'));
    cy.clearCart();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
