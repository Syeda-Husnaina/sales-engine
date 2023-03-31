 <reference types="Cypress" />

  describe('Sales Engine', () => {
    // login as Admin
it('passes', () => {
  cy.visit('https://sales-test.devsinc.com/')
  cy.get('#user_email').type('admin@devsinc.com')
  cy.get('#user_password').type('changed')
  cy.get('.actions > .btn').click()
})
  // login as BD
        it('passes', () => {
            cy.visit('https://sales-test.devsinc.com/')
            cy.get('#user_email').type('bd@devsinc.com')
            cy.get('#user_password').type('changed')
            cy.get('.actions > .btn').click()
          })
   // login with right email and wrong password
          it('passes', () => {
            cy.visit('https://sales-test.devsinc.com/')
            cy.get('#user_email').type('bd@devsinc.com')
            cy.get('#user_password').type('changed')
            cy.get('.actions > .btn').click()
          })

// login with wrong email and wrong password
it('passes', () => {
  cy.visit('https://sales-test.devsinc.com/')
  cy.get('#user_email').type('abc@devsinc.com')
  cy.get('#user_password').type('changed')
  cy.get('.actions > .btn').click()
})
// login with empty email and  password
it('passes', () => {
  cy.visit('https://sales-test.devsinc.com/')
  cy.get('#user_email').type('')
  cy.get('#user_password').type('')
  cy.get('.actions > .btn').click()
})

})
})