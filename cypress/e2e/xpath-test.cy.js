require('cypress-xpath');

describe('simple test', () => {
  beforeEach(() => {
    cy.visit('https://juice-shop.herokuapp.com/#/')
    cy.xpath('//button[@aria-label="Close Welcome Banner"]').click()
  })

  it('Navigate to photo wall', () => {
    cy.xpath('//button[@aria-label="Open Sidenav"]').click()
    cy.xpath('//span[text()=" Photo Wall "]').click()
    cy.url().should('include','/photo-wall')
  })

})
