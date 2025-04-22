import userData from 'd:/Development/Leonardo/Aula/primeiros-passos-cypress/cypress/fixtures/userData.json'

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '.oxd-alert',
    passwordRequired:'.oxd-input-field-error-message',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastName: "[name='lastName']",
    employeeIdField: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    otherIdField: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    driverLicenceField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    licenceExpireField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
    nacionalityField: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
    maritalField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
    dateBirth: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
    closeButton: ".--close",
    nationButton: ".oxd-select-dropdown > :nth-child(6)",
    marriedButton: ".oxd-select-dropdown > :nth-child(3)",
    saveButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button",
    birthButton: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
   




  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Leonardo')
    cy.get(selectorsList.lastName).clear().type('Kikuchi')
    cy.get(selectorsList.employeeIdField).clear().type('0024')
    cy.get(selectorsList.otherIdField).clear().type('1314')
    cy.get(selectorsList.driverLicenceField).clear().type('1011121314')
    cy.get(selectorsList.licenceExpireField).clear().type('2025-07-09')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.nacionalityField).click()
    cy.get(selectorsList.nationButton).click()
    cy.get(selectorsList.maritalField).click()
    cy.get(selectorsList.marriedButton).click()
    cy.get(selectorsList.saveButton).click()
    cy.get(selectorsList.birthButton).clear().type('1994-07-09')
    cy.get(selectorsList.closeButton).click()
    cy.get('body').should('contain', 'Successfully Updated')
  

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })

  it('Login Without Password', () => {
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
cy.get(selectorsList.loginButton).click()
cy.get(selectorsList.passwordRequired)
})

})