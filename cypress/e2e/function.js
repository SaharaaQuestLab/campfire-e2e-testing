export async function login(
	username,
) {
	const userAddress = JSON.parse(JSON.stringify(Cypress.env(username))).userAddress;
	const privateKey = JSON.parse(JSON.stringify(Cypress.env(username))).privateKey;
	const userRole = JSON.parse(JSON.stringify(Cypress.env(username))).userRole;
	cy.visit(`https://quest.ownstack.cn/?isTest=true&userAddress=${userAddress}&privateKey=${privateKey}&userRole=${userRole}`);
	cy.get('.test-login').click();
}