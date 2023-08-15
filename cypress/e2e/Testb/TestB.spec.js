import HomePage from '../pageobjects/HomePage'

class URL {
  static loadHomePage() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(
      "https://tvolearn.com/"
    );
  }
}

describe('template spec', () => {
  // Exception handling code. If it would have been multiple e2e files, then it would have been in /support/e2e.js

  Cypress.on("fail", (err, runnable) => {
    cy.log(err.message);
    return false;
  });

  cy.on("uncaught:exception", (e, runnable) => {
    console.log("error", e);
    console.log("runnable", runnable);
    return false;
  });

  before(function () {
    URL.loadHomePage();
  });

  after(function () {
    Cypress.Cookies.debug(true);  // clear cookies again after visiting
  });


  it('Test Case 10: API tests', () => {
    cy.request("https://fonts.googleapis.com/css?family=Rubik:400,400i,500,700&display=swap").then((response) => {
      cy.log(JSON.stringify(response.headers))
      cy.log(JSON.stringify(response))
    })
    cy.request("https://fonts.googleapis.com/css?family=Rubik:400,400i,500,700&display=swap").as('user')
    cy.get('@user').its('headers').its('content-type').should('include', 'text/css')
    cy.get('@user').its('status').should('equal', 200)

  })

})