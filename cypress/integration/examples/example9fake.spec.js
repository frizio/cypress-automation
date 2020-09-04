/// <reference types="cypress" />

describe('Another xhr Test Suite', () => {
  
  it('The 1st Test Case', function() {

    cy.visit("https://example.cypress.io/commands/network-requests")
    cy.server()

    cy.route( {
      method: 'PUT',
      url: "comments/*",
      status: 404,
      response: {
        error: "Comment not exist!"
      },
      deplay: 1000
    } ).as('UpdateComment')

    cy.get('.network-put').click()

    cy.get('.network-put-comment').should('contain', 'Comment not exist!')

  });

})

// Example website
// https://example.cypress.io/commands/network-requests