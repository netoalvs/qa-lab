describe('Payment Processing Test', () => {
  it('should successfully process a payment', () => {
    cy.login(Cypress.env('SAUCEDEMO_USER'), Cypress.env('SAUCEDEMO_PASSWORD'));
    cy.visit('/payment');
    cy.get('#card-number').type('4111111111111111');
    cy.get('#expiry-date').type('12/25');
    cy.get('#cvv').type('123');
    cy.get('#pay-button').click();
    cy.get('.confirmation-message').should('contain', 'Payment Successful');
  });
});
