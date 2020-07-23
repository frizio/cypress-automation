/// <reference types="cypress" />

describe('My 5th Test Suite', () => {
  
  it('My 5th Test Case', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //cy.get('#opentab').invoke('removeAttr', 'target').click();
  
    /*
    cy.url().should('include','qaclickacademy');
    cy.go('back');
    */

    // Get href attribute
    cy.get('#opentab').then( (el) => {
      const url = el.prop('href');
      cy.log(url);
      cy.visit(url);
    });

  });

})