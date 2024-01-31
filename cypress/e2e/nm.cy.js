import {login} from "./function";

describe('login spec', () => {
	it('nm点击team,打开邀请', () => {
		login("nm1");
		cy.url().should('include', 'nodeManagerV2/job');
		// cy.get('span>svg').find('[data-icon="user-add"]').click()
		cy.get('span').contains('Team').click();
		cy.url().should('include', '/nodeManagerV2/team');
		cy.get('span').contains('Invite member').click();
		cy.wait(1000);
		cy.get('[role="dialog"]').find('.p-4').should('include.text', 'https://quest.ownstack.cn/#/invite/');
	});
	
	it('nm点击邀请图标', () => {
		login("nm1");
		cy.url().should('include', 'nodeManagerV2/job');
		cy.get('.sa-v2-space').find('[aria-label="user-add"]').click()
		// cy.get('span').get('div').find('[aria-label="user-add"]').click()
		cy.wait(1000);
		cy.get('[role="dialog"]').find('.p-4').should('include.text', 'https://quest.ownstack.cn/#/invite/');
	});
});

describe.skip("", () => {
	it('labeler login', () => {
		const userAddress = JSON.parse(JSON.stringify(Cypress.env('labeler1'))).userAddress;
		const privateKey = JSON.parse(JSON.stringify(Cypress.env('labeler1'))).privateKey;
		const userRole = JSON.parse(JSON.stringify(Cypress.env('labeler1'))).userRole;
		cy.visit(`https://quest.ownstack.cn/?isTest=true&userAddress=${userAddress}&privateKey=${privateKey}&userRole=${userRole}`);
		cy.get('.test-login').click();
		cy.url().should('include', 'user/dashboard');
	})
	it('am login', () => {
		const userAddress = JSON.parse(JSON.stringify(Cypress.env('am'))).userAddress;
		const privateKey = JSON.parse(JSON.stringify(Cypress.env('am'))).privateKey;
		const userRole = JSON.parse(JSON.stringify(Cypress.env('am'))).userRole;
		cy.visit(`https://quest.ownstack.cn/?isTest=true&userAddress=${userAddress}&privateKey=${privateKey}&userRole=${userRole}`);
		cy.get('.test-login').click();
		cy.url().should('include', 'accountManager/dashboard');
	})
	it('qm login', () => {
		const userAddress = JSON.parse(JSON.stringify(Cypress.env('qm'))).userAddress;
		const privateKey = JSON.parse(JSON.stringify(Cypress.env('qm'))).privateKey;
		const userRole = JSON.parse(JSON.stringify(Cypress.env('qm'))).userRole;
		cy.visit(`https://github.com/SaharaaQuestLab/campfire-frontend/pull/145`);
		cy.get('.test-login').click();
		cy.url().should('include', 'queueManager/dashboard');
	})
	it('requester login', () => {
		const userAddress = JSON.parse(JSON.stringify(Cypress.env('requester'))).userAddress;
		const privateKey = JSON.parse(JSON.stringify(Cypress.env('requester'))).privateKey;
		const userRole = JSON.parse(JSON.stringify(Cypress.env('requester'))).userRole;
		cy.visit(`https://quest.ownstack.cn/?isTest=true&userAddress=${userAddress}&privateKey=${privateKey}&userRole=${userRole}`);
		cy.get('.test-login').click();
		cy.url().should('include', 'requester/dashboard');
	})
})