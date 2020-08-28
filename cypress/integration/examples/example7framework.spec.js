/// <reference types="cypress" />

describe('The Test Suite', () => {

  before( () => {
    // Setup


  })
  
  it('The 1st Test Case', () => {

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("input[name='name']:nth-child(2)").type("Bob")
    cy.get('select').select("Female")

  });


})
