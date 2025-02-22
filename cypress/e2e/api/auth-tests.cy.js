describe('Auth API Tests', () => {
    let token;
  
    it('Should authenticate and receive a token', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
          email: Cypress.env('API_EMAIL'), // Using env variable
          password: Cypress.env('API_PASSWORD'), // Using env variable
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        token = response.body.token; // Save the token for later use
      });
    });
  
    it('Should fetch user data using the token', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/2',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('email');
      });
    });
  });