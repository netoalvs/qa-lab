describe('Error Handling Exploration', () => {
  it('should display error messages on invalid input', () => {
    cy.visit('/form');
    cy.get('#submit').click();
    cy.get('.error').should('be.visible');
  });

  it('should handle 404 errors gracefully', () => {
    cy.request({
      url: '/non-existent-page',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
