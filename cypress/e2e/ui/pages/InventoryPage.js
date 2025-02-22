class InventoryPage {
    getCartBadge() {
      return cy.get('.shopping_cart_badge');
    }
  
    addFirstProductToCart() {
      cy.get('.inventory_item').first().find('button').click();
    }
  }
  
  export default new InventoryPage();