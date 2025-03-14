describe('Checkout Flow Regression Test', () => {
  it('should complete the checkout process successfully', () => {
    cy.login(Cypress.env('SAUCEDEMO_USER'), Cypress.env('SAUCEDEMO_PASSWORD'));
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
    cy.get('#first-name').type('Test');
    cy.get('#last-name').type('User');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.get('.complete-header').should('contain', 'Thank you');
  });
});
