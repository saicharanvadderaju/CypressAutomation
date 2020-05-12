/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

  it('My Fisrt Test Case', function()
  {
      cy.visit("https://www.flipkart.com/");

      cy.get("input[name='q']").type("mobiles under 8000");

      cy.get("button[type='submit']").click();

      cy.get("div[class='_1-2Iqu row'] div[class='_3wU53n']").each(($el,index,$list) => {

        const text=$el.text();

        if(text==="Realme C2 (Diamond Black, 32 GB)")
        {
          $el.click();
        }

      })

      
})
})
