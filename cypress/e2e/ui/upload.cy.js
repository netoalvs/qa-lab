describe('Upload Tests', () => {
  it('Should upload a file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('users.json');
    cy.get('#file-submit').click();
    cy.get('#uploaded-files').should('contain', 'users.json');
  });
});
