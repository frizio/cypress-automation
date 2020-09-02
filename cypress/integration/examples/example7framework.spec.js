/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage"
import ShopPage from "../pageObjects/ShopPage"

describe('The Test Suite', () => {

  before( () => {
    // Setup
    cy.fixture('example.json').then( function(data) {
       this.data = data;
    })
  })
  
  it('The 1st Test Case', function() {

    Cypress.config('defaultCommandTimeout', 10000)

    const homePage = new HomePage();
    const shopPage = new ShopPage();

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

    shopPage.getCheckout().click()

    cy.contains('Checkout').click()

    cy.get('#country').type('Italy')
    cy.get('.suggestions > ul > li > a').click()

  });

})
