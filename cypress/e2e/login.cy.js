describe('login spec', () => {
  it('passes', () => {
    const userAddress = Cypress.env('userAddress');
    const privateKey = Cypress.env('privateKey');
    cy.visit(`http://localhost:3000/?isTest=true&userAddress=${userAddress}&privateKey=${privateKey}`);
    cy.get('.test-nm').click();
    cy.url().should('include', 'nodeManagerV2/job');
  })
})