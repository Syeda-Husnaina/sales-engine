
describe('Sales Engine', () => {
    it('passes', () => {
//Add Pseudo 
      cy.visit('https://sales-test.devsinc.com/')
  // login as admin with Correct email and Password
      cy.get('#user_email').type('admin@devsinc.com')
      cy.get('#user_password').type('changed')
      cy.get('.actions > .btn').click()
      cy.get('.select-none > .material-icons').click()
  //Goto Pseudo
      cy.visit('https://sales-test.devsinc.com/admin_panel/pseudos')
  // Add pseudo
      cy.get('#new_admin_panel_company_path_button > form > .relative').click()
      cy.get('#pseudo_name').type("Naina Shah")
       cy.get("button[type='submit']").contains('Save').click({ force: true })
  // Text must be visible
       cy.contains('You have successfully added a Pseudo').should('be.visible')
    })
// User must not be able to create a psedudo with already exiting pseudo
   it('passes', () => {
    //Login as Admin
  cy.visit('https://sales-test.devsinc.com/')
  cy.get('#user_email').type('admin@devsinc.com')
  cy.get('#user_password').type('changed')
  cy.get('.actions > .btn').click()
  cy.get('.select-none > .material-icons').click()
  //Goto pseudo
  cy.visit('https://sales-test.devsinc.com/admin_panel/pseudos')
  //Add a Pseudo with exiting name
  cy.get('#new_admin_panel_company_path_button > form > .relative').click()
  cy.get('#pseudo_name').type("Naina Shah")
  cy.get("button[type='submit']").contains('Save').click({ force: true })
  //Text should be visible
  cy.contains('can not be duplicated').should('be.visible')
  
  })
//Edit a Pseudo
  it('passes', () => {
    cy.visit('https://sales-test.devsinc.com/')
    cy.get('#user_email').type('admin@devsinc.com')
    cy.get('#user_password').type('changed')
    cy.get('.actions > .btn').click()
    cy.get('.select-none > .material-icons').click()
    cy.visit('https://sales-test.devsinc.com/admin_panel/pseudos')
    cy.get('[data-table-grid-row-url-value="/admin_panel/pseudos/1"] > :nth-child(2) > #edit_admin_panel_pseudo_path_button > form > .relative').click()
    cy.get('#pseudo_name').clear().type("Amsil sarim")
    cy.get("button[type='submit']").contains('Save').click({ force: true })
// Text must be visible
    cy.contains('You have successfully updated this Pseudo').should('be.visible')

   })

  
  
  })