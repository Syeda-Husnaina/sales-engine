
describe('Sales Engine', () => {
    it('passes', () => {
      cy.visit('https://sales-test.devsinc.com/')
      // Login with Empty fields
      // Login with incorrect email and password
      //Login with google
      // login as admin with Correct email and Password
      cy.get('#user_email').type('admin@devsinc.com')
      cy.get('#user_password').type('changed')
      cy.get('.actions > .btn').click()
      // cy.get('h1 > .btn').click()
      // // cy.get('#lead_company_name').type('Company Name')
      // // cy.get('.mt-2 > .form-label').click();
      // // cy.get('.mt-2 > .form-label').contains('Prospect').click();
      // // cy.get('.mt-2 > .form-label').should('contain', 'Prospect 1');
  
      // // // cy.get('#lead_company_name').type("Prospect") 
      // // cy.get('#lead_clients').type("Husnaina")
      // // // cy.get('#lead_phase_effective_date').click
      // cy.get('#lead_save').click()
      cy.get('.select-none > .material-icons').click()
      cy.visit('https://sales-test.devsinc.com/admin_panel/pseudos')
      cy.get('#new_admin_panel_company_path_button > form > .relative').click()
      cy.get('#pseudo_name').type("Naina Shah")
      // cy.get('.border-t > .md\:justify-self-end > .relative').contains('Save').clickclick()
       cy.get("button[type='submit']").contains('Save').click({ force: true })
       cy.contains('You have successfully added a Pseudo').should('be.visible')
       //sales-test.devsinc.com/admin_panel/pseudos
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
  
  
  
  })