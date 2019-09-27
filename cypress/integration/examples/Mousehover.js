/// <reference types="Cypress" />

describe('My popup Test Suite', function()
{

  it('My popup Test Case', function()
  {
      
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //CYpress handles mousehover using jquery show method
      //Jquery show method should be applied on the immediate parent
      cy.get('.mouse-hover-content').invoke('show')

      //one more way of handling hidden elements is 
      //Just pass {force:true} in the method and cypress automatically takes care of it
      cy.contains('Top').click({force:true})

      cy.url().should('includes','top')
})
})
