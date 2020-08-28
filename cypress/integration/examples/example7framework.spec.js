/// <reference types="cypress" />

describe('The Test Suite', () => {

  before( () => {
    // Setup
    cy.fixture('example.json').then( function(data) {
       this.data = data;
    })
  })
  
  it('The 1st Test Case', function() {

    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("input[name='name']:nth-child(2)").type(this.data.name)
    cy.get('select').select(this.data.gender)

  });

})
