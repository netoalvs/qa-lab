describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Should log in with valid credentials', () => {
    cy.get('#user-name').type(Cypress.env('SAUCEDEMO_USER'));
    cy.get('#password').type(Cypress.env('SAUCEDEMO_PASSWORD'));
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Should display error with invalid credentials', () => {
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});