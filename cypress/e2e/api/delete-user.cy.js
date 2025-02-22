describe('Delete User API Tests', () => {
    it('Should delete a user', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2',
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });