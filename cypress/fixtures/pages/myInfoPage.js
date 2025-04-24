class MyInfoPage{
    selectorsList() {
        const selectors = {
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
        return selectors
    }
    PersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastName).clear().type(lastName)
    }
    EmployeeDetails(EmployeeId, otherId, driversLicense, driversLicenseDate) {
        cy.get(this.selectorsList().employeeIdField).clear().type(EmployeeId)
        cy.get(this.selectorsList().otherIdField).clear().type(otherId)
        cy.get(this.selectorsList().driverLicenceField).clear().type(driversLicense)
        cy.get(this.selectorsList().licenceExpireField).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().closeButton).click()
    }
    saveForm() {
        cy.get(this.selectorsList().saveButton).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
    status() {
        cy.get(this.selectorsList().nacionalityField).click()
        cy.get(this.selectorsList().nationButton).click()
        cy.get(this.selectorsList().maritalField).click()
        cy.get(this.selectorsList().marriedButton).click()
        cy.get(this.selectorsList().birthButton).clear().type('1994-07-09')
        cy.get(this.selectorsList().closeButton).click()
    }
}
export default MyInfoPage