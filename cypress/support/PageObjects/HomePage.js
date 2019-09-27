class HomePage
{

getnameeditbox()
{
    return cy.get(':nth-child(1) > .form-control')
}

getGender()
{
    return cy.get('#exampleFormControlSelect1')
}

getTwowaydatabinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

getEnterpreneurradiobutton()
{
    return cy.get('#inlineRadio3')
}

getshoptab()
{
    return cy.contains('Shop')
}

}

export default HomePage;