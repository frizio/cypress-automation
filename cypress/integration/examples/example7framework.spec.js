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

    cy.visit(Cypress.env('url') + "/angularpractice/")

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    
    // Validation 1 : Two way data binding
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    // Validation 2 : Min length of a text field
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    // Validation 3 : Disabled field
    homePage.getEntrepeneur().should('be.disabled')

    homePage.getShopTab().click()

    this.data.productName.forEach( function(element) {
      cy.selectProduct(element)
    });

    shopPage.getCheckout().click()

    cy.pause()
    // Sum the product chart price
    var totalPrice = 0;
    cy.get('tr td:nth-child(4) strong').each( ($el, index, $list) => {
      //cy.log($el.text())
      const price = $el.text().split(" ")[1].trim()
      //cy.log(price)
      totalPrice = totalPrice + Number(price)
    }).then( function() {
      cy.log(totalPrice)
    } )
    //Compare sum and total
    cy.get('h3 strong').then( function(element) {
      const total = element.text().split(" ")[1].trim()
      expect(Number(total)).to.equal(totalPrice)
    })

    cy.contains('Checkout').click()

    cy.get('#country').type('Italy')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox').click()
    //cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    
    cy.get('.alert').then( function(element) {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    } )

  });

})
