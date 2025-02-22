Cypress.Commands.add('login', (username, password) => {
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

Cypress.Commands.add('clearCart', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('.cart_item').each(() => {
    cy.get('button').contains('Remove').click();
  });
  cy.get('.shopping_cart_link').click();
});

Cypress.Commands.add('loginAPI', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    body: {
      email,
      password,
    },
  });
});

Cypress.Commands.add('getUser', (userId) => {
  cy.request({
    method: 'GET',
    url: `https://reqres.in/api/users/${userId}`,
  });
});