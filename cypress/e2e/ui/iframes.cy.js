describe('Iframe Tester Site', () => {
  beforeEach(() => {
    cy.visit('https://iframetester.com/');
  });

  it('Should enter a URL and render it in an iframe', () => {
    cy.get('#url-search').type('https://example.com');
    cy.get('button').click();

    cy.get('iframe')
      .should('exist')
      .and('be.visible');
  });
});
