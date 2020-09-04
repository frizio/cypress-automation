/// <reference types="cypress" />

describe('The xhr Test Suite', () => {

  beforeEach( () => {
    cy.visit("https://example.cypress.io/commands/network-requests")
    cy.server()
  })
  
  it('GET request Test Case', function() {

    cy.route('GET', 'comments/*').as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').its('status').should('eq', 200)

  });

  it('POST request Test Case', function() {

    // Listen to POST to comments
    cy.route('POST', '/comments').as('postComment')

    // we have code that posts a comment when the button is clicked in scripts.js
    cy.get('.network-post').click()
    cy.wait('@postComment')

    // get the route
    cy.get('@postComment').should((xhr) => {
        expect(xhr.requestBody).to.include('email')
        expect(xhr.requestHeaders).to.have.property('Content-Type')
        expect(xhr.responseBody).to.have.property('name', 'Using POST in cy.route()')
    })

  });

})

// Example website
// https://example.cypress.io/commands/network-requests