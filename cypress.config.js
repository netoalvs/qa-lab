const { defineConfig } = require('cypress');
const mysql = require('mysql2/promise');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
      SAUCEDEMO_USER: 'standard_user',
      SAUCEDEMO_PASSWORD: 'secret_sauce',
      API_EMAIL: 'eve.holt@reqres.in',
      API_PASSWORD: 'cityslicka',
      DB_HOST: 'localhost',
      DB_USER: 'root',
      DB_PASSWORD: 'root',
      DB_NAME: 'test_db',
    },
    setupNodeEvents(on, config) {
      on('task', {
        async queryDb(query) {
          const connection = await mysql.createConnection({
            host: config.env.DB_HOST,
            user: config.env.DB_USER,
            password: config.env.DB_PASSWORD,
            database: config.env.DB_NAME,
          });
          const [results] = await connection.execute(query);
          await connection.end();
          return results;
        },
      });
    },
  },
});
