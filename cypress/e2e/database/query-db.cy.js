describe('Database Query Tests', () => {
    it('Should query the database', () => {
      cy.task('queryDb', 'SELECT * FROM users WHERE id = 1').then((result) => {
        expect(result[0].name).to.eq('John Doe');
      });
    });
  });