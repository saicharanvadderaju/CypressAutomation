/// <reference types="Cypress" />

import HomePage from '../../support/PageObjects/HomePage'

import ProductsPage from '../../support/PageObjects/ProductsPage'

describe('My popup Test Suite', function()
{
  before(function()
  {
    //runs once before all tests in the block
    cy.fixture('example').then(function(data)
    {
     this.data=data
    }) 
  })

  it('My popup Test Case', function()
  {
      const homepage=new HomePage()

      const productpage=new ProductsPage()

   cy.visit(Cypress.env('url'))
   homepage.getnameeditbox().type(this.data.name)

   homepage.getGender().select(this.data.gender)

    //Validate if text entered in Two way binding example textbox is same as text in name textbox

    homepage.getTwowaydatabinding().should('have.value',this.data.name)

    homepage.getnameeditbox().should('have.attr','minlength','2')
    
    homepage.getEnterpreneurradiobutton().should('be.disabled')

    homepage.getshoptab().click()

    //cy.pause()

    this.data.productname.forEach(function(element) {
      cy.selectproduct(element)
    });

    productpage.getcheckoutbutton().click()

    var sum=0
     
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
      const amount=$el.text()
       var res=amount.split(' ')
       res=res[1].trim()

       sum=Number(sum)+Number(res)

      }).then(function()
      {
         cy.log(sum)
      })

      cy.get('h3 strong').then(function(element)
      {
        const amount=element.text()
        var res=amount.split(' ')
        var total=res[1].trim()

        expect(Number(total)).to.equal(sum)
      })
   
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get('input[type="submit"]').click()

    cy.get('.alert').then(function(element)
    {
      const actualtext=element.text()
      expect(actualtext.includes('Success')).to.be.true
    }
    )


})
})
