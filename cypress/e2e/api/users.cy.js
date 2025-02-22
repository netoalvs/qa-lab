describe('Users API Tests', () => {
    it('Should fetch a list of users', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.length.greaterThan(0);
      });
    });
  });