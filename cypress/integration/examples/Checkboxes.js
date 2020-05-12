/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

  it('My Fisrt Test Case', function()
  {
      cy.visit("https://qaclickacademy.com/practice.php");

      //tick on checkbox and use assertion to validate if the checkbox is selected and if it has a atrribute of value
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      //uncheck the checkbox and validate whether it is unticked or not
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      //check two out of 3checkboxes
      cy.get('input[type="checkbox"]').check(['option2','option3'])

      //static dropdowns

      cy.get('select#dropdown-class-example').select('Option1').should('have.value','option1')

      //Dynamic Dropdowns and autosuggestions

      cy.get('#autocomplete').type('ind')

      cy.get('.ui-menu-item div').each(($el,index,$list) => {
       if($el.text()==="British Indian Ocean Territory")
      {
        $el.click()
      }

      })

      
     cy.get('#autocomplete').should('have.value','British Indian Ocean Territory')

     //Hidden or Displayed exercise

     cy.get('#displayed-text').should('be.visible')

     cy.get('#hide-textbox').click()

     cy.get('#displayed-text').should('not.be.visible')

     cy.get('#show-textbox').click()

     //radiobuttons

     cy.get('input[value="radio3"]').check().should('be.checked').and('have.value','radio3')

})
})
