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
    cy.get('.products').as('productsLocator');
    cy.get('@productsLocator').find('.product').should('have.length', 4);

    // Add to chart
    cy.wait(2000);
    cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click();
    cy.get(':nth-child(1) > .product-action > button').click();

    cy.get('@productsLocator').find('.product').each( ($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if (textVeg.includes('Carrot')) {
        $el.find('button').click();
      }
    });

    cy.get('.brand').then(
      (logo) => {cy.log(logo.text());}
    );

    //cy.log('Ciaoooo');

  })

})