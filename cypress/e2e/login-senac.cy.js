

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br/')

    cy.get('.mburger').click()

    cy.get('#txtLoginNaoLogadoMob').click()

    cy.get('#login-email').type('colocaremail')

    cy.get('#login-password').type('colocarsenha')

    cy.get('#btnLoginHeader').click()
    
  })
})