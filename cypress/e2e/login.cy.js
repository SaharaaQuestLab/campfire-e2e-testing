function getUserInfoByRole (role) {
  let queryAddress = '';
  let queryPrivateKey = '';
  switch (role) {
    case 1:
      queryAddress = Cypress.env('userAddressRe');
      queryPrivateKey = Cypress.env('privateKeyRe');
      break;
    case 2:
      queryAddress = Cypress.env('AmAddress');
      queryPrivateKey = Cypress.env('AmprivateKey');
      break;
    case 4:
      queryAddress = Cypress.env('QmAddress');
      queryPrivateKey = Cypress.env('QmprivateKey');
      break;
    case 5:
      queryAddress = Cypress.env('ReAddress');
      queryPrivateKey = Cypress.env('ReprivateKey');
      break
    case 6:
      queryAddress = Cypress.env('NmAddress');
      queryPrivateKey = Cypress.env('NmprivateKey');
      break
    default:
      throw new Error('Description Failed to obtain user information');
  }
  return {
    userAddress: queryAddress,
    userPrivateKey: queryPrivateKey
  }
}

export default function login(role) {
  const userInfo = getUserInfoByRole(role);
  const loginUrl = `https://quest.ownstack.cn/?isTest=true&userAddress=${userInfo.userAddress}&privateKey=${userInfo.userPrivateKey}&userRole=${role}`;
  cy.visit(loginUrl);
  cy.get('.test-login').click();
  cy.log(loginUrl);
  return loginUrl;
}

// it('should login as role1 user1', () => {
//   login(5);
// });