import userData from 'd:/Development/Leonardo/Aula/primeiros-passos-cypress/cypress/fixtures/userData.json'
import LoginPage from 'd:/Development/Leonardo/Aula/primeiros-passos-cypress/cypress/fixtures/pages/loginPage'
import DashboardPage from '../fixtures/pages/dashboardPage'
import MenuPage from '../fixtures/pages/menuPage'
import MyInfoPage from '../fixtures/pages/myInfoPage'
import LoginFail from '../fixtures/pages/loginFail'

const Chance = require('chance')


const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const loginFail = new LoginFail()

describe('Orange HRM Test', () => {


  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.PersonalDetails(chance.first(), chance.last())
    myInfoPage.EmployeeDetails('EmployId', 'OtherId', '10111213', '2025-10-07')
    myInfoPage.status()
    myInfoPage.saveForm()
  })

  

})