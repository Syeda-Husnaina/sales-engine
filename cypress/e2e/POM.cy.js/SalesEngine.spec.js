import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import PseudoPage from '../pages/PseudoPage'

describe('Sales Engine', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const pseudoPage = new PseudoPage()

  it('should login as admin and add a new pseudo', () => {
    loginPage.visit()
    loginPage.fillEmail('admin@devsinc.com')
    loginPage.fillPassword('changed')
    loginPage.submitLoginForm()

    homePage.selectMenu()

    pseudoPage.visit()
    pseudoPage.addPseudo('Naina Shah')
    pseudoPage.isSuccessMessageVisible()
  })

  it('should not allow creating a duplicate pseudo', () => {
    loginPage.visit()
    loginPage.fillEmail('admin@devsinc.com')
    loginPage.fillPassword('changed')
    loginPage.submitLoginForm()

    homePage.selectMenu()

    pseudoPage.visit()
    pseudoPage.addPseudo('Naina Shah')
    pseudoPage.isDuplicateErrorVisible()
  })

  it('should edit an existing pseudo', () => {
    loginPage.visit()
    loginPage.fillEmail('admin@devsinc.com')
    loginPage.fillPassword('changed')
  })

})