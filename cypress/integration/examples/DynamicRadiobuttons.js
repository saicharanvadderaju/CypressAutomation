/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

  it('My Fisrt Test Case', function()
  {
      cy.visit("https://www.toolsqa.com/automation-practice-form/");

      

      //Dynamic Dropdowns and autosuggestions

      /*cy.get('#autocomplete').type('ind')*/

      cy.get("[name='exp']").eq(2).click();

      cy.get("[name='exp']").each(($el,index,$list) => {
        if($el.attr("value")==="5")
       {
         $el.click()
       }
 
       })

})
})
