class PseudoPage {
    visit() {
      cy.visit('https://sales-test.devsinc.com/admin_panel/pseudos')
    }
  
    addPseudo(name) {
      cy.get('#new_admin_panel_company_path_button > form > .relative').click()
      cy.get('#pseudo_name').type(name)
      cy.get("button[type='submit']").contains('Save').click({ force: true })
    }
  
    editPseudo(name) {
      cy.get('[data-table-grid-row-url-value="/admin_panel/pseudos/1"] > :nth-child(2) > #edit_admin_panel_pseudo_path_button > form > .relative').click()
      cy.get('#pseudo_name').clear().type(name)
      cy.get("button[type='submit']").contains('Save').click({ force: true })
    }
  
    isDuplicateErrorVisible() {
      cy.contains('can not be duplicated').should('be.visible')
    }
  
    isSuccessMessageVisible() {
      cy.contains('You have successfully').should('be.visible')
    }
  }
  
  export default PseudoPage
  