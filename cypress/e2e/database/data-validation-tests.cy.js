describe('Database Data Validation Tests', () => {
    it('Should validate inserted data', () => {
      cy.task('queryDb', "INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');");
      cy.task('queryDb', 'SELECT * FROM users WHERE email = "john.doe@example.com";').then((result) => {
        expect(result[0].name).to.eq('John Doe');
        expect(result[0].email).to.eq('john.doe@example.com');
      });
    });
  });