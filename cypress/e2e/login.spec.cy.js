import userData from 'd:/Development/Leonardo/Aula/primeiros-passos-cypress/cypress/fixtures/userData.json'
import LoginPage from 'd:/Development/Leonardo/Aula/primeiros-passos-cypress/cypress/fixtures/pages/loginPage'
import DashboardPage from '../fixtures/pages/dashboardPage'
import MenuPage from '../fixtures/pages/menuPage'
import MyInfoPage from '../fixtures/pages/myInfoPage'
import LoginFail from '../fixtures/pages/loginFail'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const loginFail = new LoginFail()

describe('Login Orange HRM Test', () => {



  it('Login - Fail', () => {
    loginFail.accessLoginPage()
    loginFail.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginFail.checkAccessInvalid()
   
    
  })
  it('Login - Success', () => {
    loginFail.accessLoginPage()
    loginFail.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
   
    
  })


})