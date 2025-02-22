describe('Posts API Tests', () => {
    it('Should fetch a list of posts', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.greaterThan(0);
      });
    });
  });