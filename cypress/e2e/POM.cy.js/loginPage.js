class LoginPage {
    visit() {
      cy.visit('https://sales-test.devsinc.com/')
    }
  
    fillEmail(email) {
      cy.get('#user_email').type(email)
    }
  
    fillPassword(password) {
      cy.get('#user_password').type(password)
    }
  
    submitLoginForm() {
      cy.get('.actions > .btn').click()
    }
  }
  
  export default LoginPage
  