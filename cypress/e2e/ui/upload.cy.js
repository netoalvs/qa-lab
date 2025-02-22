describe('Upload Tests', () => {
    it('Should upload a file', () => {
      cy.visit('https://the-internet.herokuapp.com/upload');
      cy.get('#file-upload').attachFile('example.json');
      cy.get('#file-submit').click();
      cy.get('#uploaded-files').should('contain', 'example.json');
    });
  });