describe('Headers Validation Tests', () => {
    it('Should validate response headers', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
      });
    });
  });