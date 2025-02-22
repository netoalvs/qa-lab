const mysql = require('mysql2');

Cypress.Commands.add('queryDb', (query) => {
  const connection = mysql.createConnection({
    host: Cypress.env('DB_HOST'),
    user: Cypress.env('DB_USER'),
    password: Cypress.env('DB_PASSWORD'),
    database: Cypress.env('DB_NAME'),
  });

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        resolve(results);
      }
    });
  });
});