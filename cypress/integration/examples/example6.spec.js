/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My 6th Test Suite', () => {
  
  it('My 6th Test Case', () => {

    cy.visit(Cypress.env('url') + "/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);

  });

})