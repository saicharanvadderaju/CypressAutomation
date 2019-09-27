/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

  it('My Fisrt Test Case', function()
  {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

      cy.get('.search-keyword').type('ca')

      cy.wait(2000)

      cy.get('.product:visible').should('have.length',4)

      console.log("abc")

      //parent child chaining

      cy.get('.products').as('productname')

      cy.get('@productname').find('.product').should('have.length',4)

      cy.get('@productname').find('.product').eq(1).contains('ADD TO CART').click()

      cy.get('@productname').find('.product').each(($el,index,$list) => {

        const vegtext=$el.find('h4.product-name').text()

        if(vegtext.includes('Cashews'))
        {
           $el.find('button').click()
        }

    })

    //This is to assert the text
    cy.get('div.brand.greenLogo').should('have.text','GREENKART')

    //this is to print in logs
    cy.get('div.brand.greenLogo').then(function(logoelement){
     cy.log(logoelement.text())
    })
      
})
})
