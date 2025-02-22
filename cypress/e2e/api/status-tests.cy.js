describe('HTTP Status Tests', () => {
    it('Should handle 404 Not Found', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/invalid-endpoint',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
    it('Should handle 201 Created', () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
    });
  });