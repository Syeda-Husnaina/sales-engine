
describe('Sales Engine', () => {
  it('passes', () => {
    cy.visit('https://sales-test.devsinc.com/')
    cy.get('#user_email').type('admin@devsinc.com')
    cy.get('#user_password').type('changed')
    cy.get('.actions > .btn').click()
    cy.get('.select-none > .material-icons').click()
    cy.visit('https://sales-test.devsinc.com/admin_panel/pseudos')
    cy.get('[data-table-grid-row-url-value="/admin_panel/pseudos/1"]').click()
    cy.get('#new_admin_panel_vertical_path_button > form > .relative').click()
    cy.get('#vertical_name').type("Amsil")
    cy.get('#vertical_fit_for_id').click()
    


    // cy.get('#vertical_fit_for_id').get("uk")


   })

})