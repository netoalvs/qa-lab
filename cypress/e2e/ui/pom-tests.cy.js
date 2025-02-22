import LoginPage from './pages/LoginPage';
import InventoryPage from './pages/InventoryPage';

describe('UI Tests with Page Object Model', () => {
  it('Should log in with valid credentials', () => {
    LoginPage.visit();
    LoginPage.fillUsername(Cypress.env('SAUCEDEMO_USER')); // Using env variable
    LoginPage.fillPassword(Cypress.env('SAUCEDEMO_PASSWORD')); // Using env variable
    LoginPage.submit();
    cy.url().should('include', '/inventory.html');
  });

  it('Should add a product to the cart', () => {
    LoginPage.visit();
    LoginPage.fillUsername(Cypress.env('SAUCEDEMO_USER'));
    LoginPage.fillPassword(Cypress.env('SAUCEDEMO_PASSWORD'));
    LoginPage.submit();
    InventoryPage.addFirstProductToCart();
    InventoryPage.getCartBadge().should('contain', '1');
  });
});