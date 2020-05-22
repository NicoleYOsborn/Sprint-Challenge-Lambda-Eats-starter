describe('form inputs', ()=>{
    it('navigates to the site', ()=>{
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('Gets order form', ()=>{
        cy.get('nav-links.orderLink').click().should('include', 'Size')
    })
    it('Verifies name field works', ()=>{
        cy.get('input[name="custName"]')
            .type('Michelle')
            .should('have.value', 'Michelle')
    })
    it('checks that you can select multiple toppings', ()=>{
        cy.get('input[name="olives"]').not('[disabled]')
      .check().should('be.checked')
        cy.get('input[name="pepperoni"]').not('[disabled]')
      .check().should('be.checked')
    })
})
