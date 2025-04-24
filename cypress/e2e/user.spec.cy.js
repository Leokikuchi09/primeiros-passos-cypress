import userData from 'd:/Development/Leonardo/Aula/primeiros-passos-cypress/cypress/fixtures/userData.json'
import LoginPage from 'd:/Development/Leonardo/Aula/primeiros-passos-cypress/cypress/fixtures/pages/loginPage'
import dashboardPage from '../fixtures/pages/dashboardPage'
import MenuPage from '../fixtures/pages/menuPage'
import MyInfoPage from '../fixtures/pages/myInfoPage'
import LoginFail from '../fixtures/pages/loginFail'


const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const loginFail = new LoginFail()

describe('Orange HRM Test', () => {

  const selectorsList = {
    passwordRequired:'.oxd-input-field-error-message',
  
  }

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    DashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.PersonalDetails('First Name', 'Last Name')
    myInfoPage.EmployeeDetails('EmployId', 'OtherId', '10111213', '2025-10-07')
    myInfoPage.status()
    myInfoPage.saveForm()
  })

  it.only('Login - Fail', () => {
    loginFail.accessLoginPage()
    loginFail.loginWithUser(userData.userFail.username, userData.userFail.password)
    
   
    
  })

  it('Login Without Password', () => {
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
cy.get(selectorsList.loginButton).click()
cy.get(selectorsList.passwordRequired)
})

})