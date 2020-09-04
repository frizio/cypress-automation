/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ShopPage from "../../support/pageObjects/ShopPage"

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

})

// Example website
// https://example.cypress.io/commands/network-requests