describe('Usability Test', () => {
  it('should check navigation is intuitive', () => {
    cy.visit('/home');
    cy.get('nav').should('be.visible');
    cy.get('nav a').each(($link) => {
      cy.wrap($link).click();
      cy.url().should('include', $link.attr('href'));
    });
  });
});
