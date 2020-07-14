describe('My first Test', () => {

  it('Does not do much!', () => {
    expect(true).to.equal(true)
  }),
  
  it('My first Test case', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  })

})