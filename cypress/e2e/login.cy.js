// describe('login spec', () => {
//   it('passes', () => {
//     const userAddress = Cypress.env('userAddressNm');
//     const privateKey = Cypress.env('privateKeyNm');
//     cy.visit(`https://quest.ownstack.cn/?isTest=true&userAddress=${userAddress}&privateKey=${privateKey}&userRole=6`);
//     cy.get('.test-login').click();
//     cy.url().should('include', '/nodeManagerV2/job');
//     // console.log(url)
//   })
// })


const users = {
  '1': [
      { userAddress: '0x19745FE4980D6f0EE28bdD0a328f16CAE21c9B13', privateKey: '5ce7a39ead8cac34ca78b830ec3c1e5efeadf0880aaa926cd1cbbfab64390fdb' },
      // 添加user
      { userAddress: 'user02', privateKey: '5ce7a39ead8cac34ca78b830ec3c1e5efeadf0880aaa926cd1cbbfab64390fdb' },
      { userAddress: 'user03', privateKey: '5ce7a39ead8cac34ca78b830ec3c1e5efeadf0880aaa926cd1cbbfab64390fdb' }
  ],
  '2': [
    { userAddress: '0x496A5C061fF014b458fAc9383D03A0FD528468f0', privateKey: '9cb1773b7da8a3845a320a78f37907cd9d350b1c5e28cef7b95944d9315109e6' }
    // 添加am
  ],
  '4': [
    { userAddress: '0xd998A8F5B717e6deef43170dDf45e8236B4e225e', privateKey: '896e0eb688244e9cc3c3a1262e884058e4f331b1011817de556de2b7ed7bc242' }
    // 添加qm
  ],
  '5': [
    { userAddress: '0x19745FE4980D6f0EE28bdD0a328f16CAE21c9B13', privateKey: '5ce7a39ead8cac34ca78b830ec3c1e5efeadf0880aaa926cd1cbbfab64390fdb' }
    // 添加requester
  ],
  '6': [
    { userAddress: '0xF99B163A328E030ed65e14Fe33582EEbeFb1FAf9', privateKey: '4b3d242b106be3d7f170851990aa7f96d2b413cd0562fee5eefc670bea27e0fb' }
    // 添加nm
  ]

};

function login(role, userIndex = 0) {
  const userInfo = users[role][userIndex];
  const loginUrl = `https://quest.ownstack.cn/?isTest=true&userAddress=${userInfo.userAddress}&privateKey=${userInfo.privateKey}&userRole=${role}`;
  cy.visit(loginUrl);
  cy.get('.test-login').click();
  cy.log(loginUrl);
}

it('should login as role1 user1', () => {
  login(5, 0); // 使用字符串 '5' 作为角色
});

export default {
  login,
};