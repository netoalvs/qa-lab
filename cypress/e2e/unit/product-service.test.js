describe('Product Service Unit Test', () => {
  it('should retrieve product list', () => {
    cy.request('/inventory.json').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array').and.have.length.greaterThan(0);
    });
  });
});
