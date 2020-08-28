/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage"

describe('The Test Suite', () => {

  before( () => {
    // Setup
    cy.fixture('example.json').then( function(data) {
       this.data = data;
    })
  })
  
  it('The 1st Test Case', function() {

    const homePage = new HomePage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/")

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    
    // Validation 1 : Two way data binding
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    // Validation 2 : Min length of a text field
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    // Validation 3 : Disabled field
    homePage.getEntrepeneur().should('be.disabled')

    //cy.pause()
    homePage.getShopTab().click()

    this.data.productName.forEach( function(element) {
      cy.selectProduct(element)
    });

  });

})
