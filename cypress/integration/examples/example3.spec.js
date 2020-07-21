/// <reference types="cypress" />

describe('My Third Test Suite', () => {
  
  it('My Third Test Case', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();

    // Alert and Popup: Auto accept them by default
    // Manually firing and managing browser events
    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Hello , share this practice page and share your knowledge');
    })

    cy.on('window:confirm', (msg) => {
      expect(msg).to.equal('Hello , Are you sure you want to confirm?');
    })

    //cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.get('#opentab').click();

  });

})