import './commands';
import './db-commands';
import 'cypress-iframe';
import mysql from 'mysql2';
import 'cypress-file-upload';



beforeEach(() => {
  cy.clearLocalStorage();
});