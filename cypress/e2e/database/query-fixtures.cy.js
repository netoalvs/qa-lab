describe('Database Query with Fixtures Tests', () => {
    before(() => {
      cy.fixture('users').then((users) => {
        this.users = users;
      });
    });
  
    it('Should query the database and verify data', () => {
      cy.task('queryDb', 'SELECT * FROM users WHERE id = 1').then((result) => {
        expect(result[0].name).to.eq(this.users[0].name);
      });
    });
  });