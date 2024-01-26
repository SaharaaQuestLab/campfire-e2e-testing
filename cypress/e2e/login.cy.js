describe('login spec', () => {
  it('passes', () => {
    const userAddress = Cypress.env('userAddressNm');
    const privateKey = Cypress.env('privateKeyNm');
    cy.visit(`https://quest.ownstack.cn/?isTest=true&userAddress=${userAddress}&privateKey=${privateKey}&userRole=6`);
    cy.get('.test-login').click();
    cy.url().should('include', '/nodeManagerV2/job');
    // console.log(url)
  })
})


