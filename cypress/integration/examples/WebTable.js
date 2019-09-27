/// <reference types="Cypress" />

describe('My popup Test Suite', function()
{

  it('My popup Test Case', function()
  {
      
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

   cy.get('tr td:nth-child(2)').each(($el,index,$list) => {

    const text=$el.text()

    if(text.includes('Python'))
    {
      cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
      {

        const pricetext=price.text()

        expect(pricetext).to.equal('25')
      })
    }

   })

   
      
})
})
