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

describe('Coding test', () => {
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

  it('Start of the testing', () => {
    const homepage = new HomePage() // Object of Page object class
    homepage.getElementaryScrollDown() //Use of page object model
   //cy.get('.icon-chevron-down') .eq(0).should('be.visible') .click() // Click the elementary drop down

    cy.get('a[class="site-nav__link site-nav__child-link"]')
      .contains('Grade 2')
      .should('be.visible')
      .click() // Select Grade 2
    cy.url()
      .should('include', '/grade-2') // Verify the URL that user lands on Grade-2
    cy.get('.shogun-heading-component')
      .find('h1')
      .invoke('text')
      .then((value) => {  // Check for the text "Focus on Grade 2" on banner
        expect(value).to.contain('Focus on Grade 2')
      })
    cy.get('.shogun-heading-component')
      .find('h2')
      .contains('Learn Forward in the Curriculum')
      .scrollIntoView()
    cy.get('.button-subject-name')
      .contains('Science & Technology')
      .click()  // Click on Science and technology


    //Test Case 1:
    cy.get('.shogun-heading-component')
      .find('h1').invoke('text').then((value) => {
        expect(value).to.contain('Grade 2')
      })
    cy.get('.shogun-heading-component')
      .find('h2').invoke('text').then((value) => {
        expect(value).to.contain('Science and Technology')
      })

    // Test Case 2:  
    cy.get('.shg-rich-text > p > a')
      .click()
    cy.url()
      .should('include', '/helpful-tips')
    cy.get('.shogun-heading-component')
      .find('h1')
      .invoke('text')
      .then((value) => {
        expect(value).to.contain('Tips for Using TVO Learn')
      })
    cy.go('back')
    cy.get('.shogun-heading-component')
      .find('h2').invoke('text')
      .then((value) => {
        expect(value).to.contain('Science and Technology')
      })

    // Test Case 3:
    cy.get('#tab1')
      .find('button')
      .click()
      .wait(2000)
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('#tab0')
      .find('button')
      .should('have.css', 'background-color', 'rgb(37, 38, 169)')
    cy.get('#tab2')
      .find('button')
      .should('have.css', 'background-color', 'rgb(37, 38, 169)')
    cy.get('#tab3')
      .find('button')
      .should('have.css', 'background-color', 'rgb(37, 38, 169)')
    cy.get('.tabp')
      .invoke('text').then((value) => {
        expect(value).to.contain('Ontario Focus')
      })

    // Test Case 4:   
    cy.get('.signup-inner')
      .find('h2')
      .contains('Stay Connected')
      .scrollIntoView()
    cy.get('.st0')
      .eq(1)
      .click()
    cy.get('.shogun-heading-component')
      .find('h2')
      .invoke('text')
      .then((value) => {  // Check for the tezt "Focus on Grade 2" on banner
        expect(value).to.contain('Science and Technology')
      })

    // Test Case 5
    cy.get("a[class='site-nav__link site-nav__link--main'] span[class='site-nav__label']")
      .click()
    cy.url()
      .should('include', '/for_teachers')
    cy.get('.shogun-heading-component')
      .find('h1').invoke('text')
      .then((value) => {
        expect(value).to.contain('For Teachers')
        cy.go('back')
      })

    // Test Case 6:
    cy.get('.shogun-tab-title')
      .eq(0)
      .click()
    cy.get('#s-f1ad9c3a-424d-44b6-8741-0442bb3dcb01')
      .click()
      .should('not.be.empty')
    cy.get('.shogun-tab-title')
      .eq(1)
      .click()
      .wait(1000)
    cy.get('#s-92631948-1ba7-47c3-938c-605756ba295d')
      .click()
      .should('not.be.empty')
    cy.get('.shogun-tab-title')
      .eq(2)
      .click()
      .wait(1000)
    cy.get('#s-2b60d913-96df-4098-a4e5-6b906e646789')
      .click()
      .should('not.be.empty')
    cy.get('.shogun-tab-title')
      .eq(3)
      .click()
      .wait(1000)
    cy.get('#s-8a7bf9bc-2396-4b92-a994-922b73096e29')
      .click()
      .should('not.be.empty')

    // Test Case 7:
    cy.get('.shogun-heading-component')
      .find('h2')
      .contains('Looking for a Different Subject?')
      .scrollIntoView()
    cy.get("a[id='s-ea2ace6e-d04d-434c-9c6d-bf8dc03590a4'] div[class='button-subject-name']")
      .invoke('text')
      .then((value) => {
        expect(value).to.contain('The Arts')
      })
    cy.get("a[id='s-ea2ace6e-d04d-434c-9c6d-bf8dc03590a4'] div[class='button-subject-name']").click()
    cy.get('.shogun-heading-component')
      .find('h2')
      .contains('The Arts')
    cy.url().should('include', '/grade-2-the-arts').wait(1000)
    cy.go('back')

    //Test Case 8:
    cy.get('.signup-inner')
      .find('h2')
      .contains('Stay Connected')
      .scrollIntoView()
     homepage.getSubscribeButton() // Use of POM
    // cy.get('#mc-embedded-subscribe').should('be.visible')
    // cy.get('#mc-embedded-subscribe').should('not.be.disabled')
    // cy.get('#mc-embedded-subscribe').click()
    
    cy.get('.mce_inline_error').invoke('text').then((value) => {
      expect(value).to.contain('This field is required')
    })
    cy.get('#mce-EMAIL').click().type("rahul123")
    cy.get('#mc-embedded-subscribe').click()
    cy.get("div[for='mce-EMAIL']").invoke('text').then((value) => {
      expect(value).to.contain('Please enter a valid email address.')
    })
    cy.get('#mce-EMAIL').clear()
    cy.get('#mce-EMAIL').click().type("rahul123@gmail.com")
    cy.get('#mc-embedded-subscribe').click().wait(1000)
    cy.get('#mce-success-response').invoke('text').then((value) => {
      expect(value).to.contain('Thank You')
    })

    //Test Case 9
    cy.get("a[title='Link to the Ontario science and technology curriculum (opens in a new window)']")
      .invoke('removeAttr', 'target')
      .click()
      .wait(1000)
    cy.origin('https://www.dcp.edu.gov.on.ca', () => {
      cy.get('.shogun-heading-component')
        .find('h1')
        .invoke('text')
        .then((value) => {
          expect(value).to.not.contain('For Teachers')
          cy.go('back')
          // This will throw any error, as the text is not present and a new tab is opened
        })

    })

  })

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
