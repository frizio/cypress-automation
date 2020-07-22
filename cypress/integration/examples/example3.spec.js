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

    /*
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    //cy.get('#opentab').click();

    cy.url().should('include','qaclickacademy');
    cy.go('back');
    */

    // Web table
    // cy.get('#product')
    // 2 column of the table
    cy.get('tr > td:nth-child(2)').each( ($e1, index, $list) => {
      const text = $e1.text();
      if ( text.includes('Python') ) {
        cy.log(text);
        // Get sibling
        cy.get('tr > td:nth-child(2)').eq(index).next().then( (price) => {
          const priceText = price.text();
          expect(priceText).to.equal('25');
        }

        );
      }
    });

  });

})