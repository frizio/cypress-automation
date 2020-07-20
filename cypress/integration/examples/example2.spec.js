/// <reference types="cypress" />

describe('My Second Test Suite', () => {
  
  it('My Second Test Case', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Checkboxes
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    // Static Dropdown
    cy.get('select').select('option2').should('have.value', 'option2');

    // Dynamic Dropdown (Autocomplete)
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each( ($el, index, $list) => {
      if ($el.text() === 'India') {
        $el.click();
      }  
    });
    cy.get('#autocomplete').should('have.value', 'India');

  });

})