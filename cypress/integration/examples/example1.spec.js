/// <reference types="cypress" />

describe('My first Test', () => {

  it('Does not do much!', () => {
    expect(true).to.equal(true)
  }),
  
  it('My first Test case', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);
    // Parent - Child chaining
    cy.get('.products').find('.product').should('have.length', 4);
    
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    //cy.get(':nth-child(3) > .product-action > button').click();

  })

})