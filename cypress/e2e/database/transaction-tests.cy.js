describe('Database Transaction Tests', () => {
    it('Should rollback a transaction on error', () => {
      cy.task('queryDb', 'START TRANSACTION;').then(() => {
        cy.task('queryDb', "INSERT INTO users (name, email) VALUES ('Test User', 'test@example.com');");
        cy.task('queryDb', 'SELECT * FROM users WHERE email = "test@example.com";').then((result) => {
          expect(result[0].name).to.eq('Test User');
        });
        cy.task('queryDb', 'ROLLBACK;'); // Rollback the transaction
      });
    });
  });