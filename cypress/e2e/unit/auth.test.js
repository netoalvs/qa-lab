describe('Authentication Unit Test', () => {
  it('should authenticate user successfully', () => {
    cy.loginAPI(Cypress.env('API_EMAIL'), Cypress.env('API_PASSWORD')).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.exist;
    });
  });
});
