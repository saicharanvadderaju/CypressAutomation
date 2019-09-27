/// <reference types="Cypress" />

describe('My popup Test Suite', function()
{

  it('My popup Test Case', function()
  {
      
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

   cy.get('#alertbtn').click()

   cy.get('input[id="alertbtn"]').click()

   cy.on('window:alert',(str)=>
   {
    expect(str).to.equal('Hello , share this practice page and share your knowledge')

   })

   cy.on('window:confirm',(str)=>
   {
    expect(str).to.equal('Hello , Are you sure you want to confirm?')

   })
        //Handling child windows in Cypress
        
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','qaclickacademy')

        cy.go('back')

        cy.go('forward')
      
})
})
