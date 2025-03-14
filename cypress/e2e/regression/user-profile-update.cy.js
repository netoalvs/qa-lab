describe('User Profile Update Regression Test', () => {
  it('should update user profile successfully', () => {
    cy.login(Cypress.env('SAUCEDEMO_USER'), Cypress.env('SAUCEDEMO_PASSWORD'));
    cy.visit('/profile');
    cy.get('#name').clear().type('Updated User');
    cy.get('#save-button').click();
    cy.get('.success-message').should('contain', 'Profile updated');
  });
});
