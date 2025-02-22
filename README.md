
# Automation Showcase

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)
![License](https://img.shields.io/badge/license-Private-red)

Welcome to my **Automation Showcase**! This project is a collection of automated tests that demonstrate my skills in QA automation using **Cypress**. It covers a wide range of scenarios, including **UI testing**, **API testing**, and **database testing**, using real-world sites like [Saucedemo](https://www.saucedemo.com), [The Internet](https://the-internet.herokuapp.com), [ReqRes](https://reqres.in/), and [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## 🚀 Getting Started

### Prerequisites
Before running the tests, make sure you have the following installed:
- **Node.js** (version 16 or higher). You can download it from [nodejs.org](https://nodejs.org/).
- **Docker** (optional, for running database tests locally). You can download it from [docker.com](https://www.docker.com/).

### Installation
1. **Install Cypress**:
   If you don’t have Cypress installed, you can install it globally or locally in your project. For this project, I recommend installing it locally:
   ```bash
   npm install cypress --save-dev
   ```
2. **Clone the repository**:
   ```bash
   git clone git@github.com:netoalvs/automation-showcase.git
   cd automation-showcase
   ```
3. **Install dependencies**:
   Run the following command to install all the dependencies:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   Create an `env-config.json` file in the root directory with the following structure:
   ```json
   {
     "SAUCEDEMO_USER": "standard_user",
     "SAUCEDEMO_PASSWORD": "secret_sauce",
     "API_EMAIL": "eve.holt@reqres.in",
     "API_PASSWORD": "cityslicka",
     "DB_HOST": "localhost",
     "DB_USER": "root",
     "DB_PASSWORD": "root",
     "DB_NAME": "test_db"
   }
   ```

5. **Run the tests**:

   To run all tests in headless mode:
   ```bash
   npx cypress run
   ```

   To open Cypress in interactive mode:
   ```bash
   npx cypress open
   ```

### Database Tests (Optional):
If you want to run database tests, start the MySQL container using Docker:
```bash
docker-compose up -d
```
Then, run the database tests:
```bash
npx cypress run --spec "cypress/e2e/database/query-db.cy.js"
```

## 🧪 My Tests Info

### UI Tests
- **Login Test (login.cy.js)**  
  _Description_: Tests the login functionality on Saucedemo.  
  _Expected Result_: Users should be able to log in with valid credentials and see an error message with invalid credentials.

- **Dynamic Loading Test (dynamic-loading.cy.js)**  
  _Description_: Tests dynamic content loading on The Internet.  
  _Expected Result_: The "Hello World!" text should appear after the loading finishes.

- **Cart Test (cart.cy.js)**  
  _Description_: Tests adding a product to the cart on Saucedemo.  
  _Expected Result_: The product should be added to the cart, and the cart badge should update accordingly.

- **Page Object Model (POM) Tests (pom-tests.cy.js)**  
  _Description_: Demonstrates the use of the Page Object Model to organize UI tests.  
  _Expected Result_: Tests should be more maintainable and reusable, with selectors and actions encapsulated in page classes.

- **Alerts Test (alerts.cy.js)**  
  _Description_: Tests handling JavaScript alerts on The Internet.  
  _Expected Result_: The alert should be handled correctly, and the expected text should be displayed.

- **Hovers Test (hovers.cy.js)**  
  _Description_: Tests hover functionality on The Internet.  
  _Expected Result_: Additional information should appear when hovering over elements.

- **Iframes Test (iframes.cy.js)**  
  _Description_: Tests interaction with iframes on The Internet.  
  _Expected Result_: Text should be typed into the iframe input field successfully.

- **Download Test (download.cy.js)**  
  _Description_: Tests file download functionality on The Internet.  
  _Expected Result_: The file should be downloaded successfully.

- **Upload Test (upload.cy.js)**  
  _Description_: Tests file upload functionality on The Internet.  
  _Expected Result_: The file should be uploaded successfully.

- **Search Test (search.cy.js)**  
  _Description_: Tests search functionality on The Internet.  
  _Expected Result_: The search results should match the query.

### API Tests
- **Auth Test (auth-tests.cy.js)**  
  _Description_: Tests authentication on the ReqRes API.  
  _Expected Result_: A valid token should be returned upon successful login.

- **Users Test (users.cy.js)**  
  _Description_: Tests fetching a list of users from the ReqRes API.  
  _Expected Result_: A list of users should be returned.

- **Posts Test (posts.cy.js)**  
  _Description_: Tests fetching a list of posts from the JSONPlaceholder API.  
  _Expected Result_: A list of posts should be returned.

- **Headers Validation Test (header-tests.cy.js)**  
  _Description_: Tests the validation of response headers.  
  _Expected Result_: The content-type header should be `application/json; charset=utf-8`.

- **HTTP Status Test (status-tests.cy.js)**  
  _Description_: Tests handling of different HTTP status codes (e.g., 404 Not Found, 201 Created).  
  _Expected Result_: The API should return the correct status codes for each scenario.

- **Update User Test (update-user.cy.js)**  
  _Description_: Tests updating user data on the ReqRes API.  
  _Expected Result_: The user data should be updated successfully.

- **Delete User Test (delete-user.cy.js)**  
  _Description_: Tests deleting a user on the ReqRes API.  
  _Expected Result_: The user should be deleted successfully.

### Database Tests
- **Query Database Test (query-db.cy.js)**  
  _Description_: Tests querying a MySQL database.  
  _Expected Result_: The query should return the expected data.

- **Query Database with Fixtures Test (query-fixtures.cy.js)**  
  _Description_: Tests querying a MySQL database using fixture data.  
  _Expected Result_: The query should match the data from the fixture file.

- **Database Transaction Test (transaction-tests.cy.js)**  
  _Description_: Tests database transactions, including rollback on error.  
  _Expected Result_: The transaction should be rolled back if an error occurs.

- **Data Validation Test (data-validation-tests.cy.js)**  
  _Description_: Tests the validation of data inserted into the database.  
  _Expected Result_: The inserted data should match the expected values.

## 🧠 What I've Learned
Through this project, I’ve gained hands-on experience with Cypress and deepened my understanding of automated testing in real-world applications. Here are some key takeaways:

- **UI Testing**: I learned how to handle dynamic content, interact with forms, and use the Page Object Model (POM) to create maintainable and reusable tests.
- **API Testing**: I explored complex scenarios like authentication, header validation, and handling different HTTP status codes.
- **Database Testing**: I integrated MySQL with Cypress to validate data integrity and test database transactions.
- **Best Practices**: I applied best practices for organizing tests, using environment variables, and integrating with Docker for database testing.

## 🚀 Future Improvements
I plan to continue enhancing this project by:
- Adding Advanced API Tests: Implementing tests for rate limiting, pagination, and token refresh workflows.
- Performance Testing: Adding performance tests to measure the efficiency of the APIs and the application under load.
- Visual Regression Testing: Integrating visual regression testing to ensure the UI remains consistent across versions.
- CI/CD Integration: Automating the testing process using continuous integration tools like GitHub Actions or Jenkins.

## 📄 License
This project is private and intended for portfolio purposes only. Please do not distribute or modify without permission.
