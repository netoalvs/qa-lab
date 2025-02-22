describe('Update User API Tests', () => {
    it('Should update a user', () => {
      cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body: {
          name: 'John Doe',
          job: 'QA Engineer',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('John Doe');
        expect(response.body.job).to.eq('QA Engineer');
      });
    });
  });