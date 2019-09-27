/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

  it('My Fisrt Test Case', function()
  {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

      cy.get('.search-keyword').type('ca')

      cy.wait(2000)

      //parent child chaining

      cy.get('.products').as('productname')

      cy.get('@productname').find('.product').each(($el,index,$list) => {

        const vegtext=$el.find('h4.product-name').text()

        if(vegtext.includes('Cashews'))
        {
           $el.find('button').click()
        }

    })
    cy.get('a.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
     
})
})
