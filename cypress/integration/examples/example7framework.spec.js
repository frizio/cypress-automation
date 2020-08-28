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
    
    // Validation 1 : Two way data binding
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
    // Validation 2 : Min length of a text field
    cy.get("input[name='name']:nth-child(2)").should('have.attr', 'minlength', '2')
    // Validation 3 : Disabled field
    cy.get('#inlineRadio3').should('be.disabled')

    cy.get(':nth-child(2) > .nav-link').click()

    this.data.productName.forEach( function(element) {
      cy.selectProduct(element)
    });

  });

})
