describe('New Feature Exploration', () => {
  it('should validate the new feature', () => {
    cy.visit('/new-feature');
    cy.get('.feature-element').should('exist');
    cy.get('.feature-button').click();
    cy.get('.feature-modal').should('be.visible');
  });
});
