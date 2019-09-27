class ProductsPage
{

getcheckoutbutton()
{
    return cy.get('a.nav-link.btn.btn-primary')
}

}

export default ProductsPage;