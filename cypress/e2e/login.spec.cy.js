describe('Orange HRM Test', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admm')
    cy.get("[name='password']").type('Admin12')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert')
    
  })
  it('Login without Password', () => {
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get("[name='username']").type('Admin')
cy.get("[type='submit']").click()
cy.get('.oxd-input-group > .oxd-text')
})

})