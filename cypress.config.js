const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
      DB_HOST: 'localhost',
      DB_USER: 'root',
      DB_PASSWORD: 'root',
      DB_NAME: 'test_db',
    },
    setupNodeEvents(on, config) {
      on('task', {
        queryDb(query) {
          return require('mysql2').createConnection({
            host: config.env.DB_HOST,
            user: config.env.DB_USER,
            password: config.env.DB_PASSWORD,
            database: config.env.DB_NAME,
          }).query(query);
        },
      });
    },
  },
});