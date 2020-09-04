/// <reference types="cypress" />

describe('API Test Suite', () => {
  
  it('The 1st Test Case', function() {

    cy.request(
      'POST',
      'http://216.10.245.166/Library/Addbook.php',
      {   
          "name":"Learn Appium Automation with Java",
          "isbn":"xxx",
          "aisle":"888",
          "author":"John foe"
      }
    ).then( function(response) {
       expect(response.body).to.have.property('Msg', 'successfully added')
       expect(response.status).to.eq(200)
    })
    
  })

})

// API Test: No UI!
