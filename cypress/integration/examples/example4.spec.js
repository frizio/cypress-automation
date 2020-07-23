/// <reference types="cypress" />

describe('My 4th Test Suite', () => {
  
  it('My 4th Test Case', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //cy.get('#mousehover').invoke('show');
    cy.get('div.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');

    // 
    cy.contains('Reload').click( {force: true} );

  });

})