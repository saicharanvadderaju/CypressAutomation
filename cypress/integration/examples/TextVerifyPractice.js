/// <reference types="Cypress" />

describe('My popup Test Suite', function()
{

  it('My popup Test Case', function()
  {
      
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

   /*cy.get(".btn.btn-primary").each(($el,index,$list) => {
    
    const text=$el.text()

    if(text=="Home")
    {
        $el.click()
    }

   })*/

   cy.get(".btn.btn-primary").contains('Signup').should('have.text','Signup')
    
   cy.get("[class='jumbotron text-center header_style'] [class='btn btn-primary']").each(($el,index,$list) => {
    
  const text=$el.text();
   
  
   })

//comparing two arrays
   const filetypes = ['Home', 'Practice', 'Login','Signup'];
cy.get("[class='jumbotron text-center header_style'] [class='btn btn-primary']").should(($els) => {
  // map jquery elements to array of their innerText
  const elsText = $els.toArray().map(el => el.innerText)
  expect(elsText).to.deep.eq(filetypes)
})


   //Another way tried to verify array of values
   /*cy
   .get("[class='jumbotron text-center header_style'] [class='btn btn-primary']")
   .should(($p) => {
     // should have found 3 elements
     expect($p).to.have.length(4)
   
   
   // make sure the first contains some text content
   expect($p.first()).to.contain('Home')

   // use jquery's map to grab all of their classes
   // jquery's map returns a new jquery object
   const classes = $p.map((i, el) => {
     return Cypress.$(el).attr('class')
   })

   expect(classes.get()).to.deep.eq([
    'Home',
    'Practice',
    'Login',
    'Signup'
  ])
  })*/

})
})