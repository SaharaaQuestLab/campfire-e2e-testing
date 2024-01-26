// const { get } = require("cypress/types/lodash");

function login() {
    const userAddress = Cypress.env('userAddressRe');
    const privateKey = Cypress.env('privateKeyRe');
    cy.visit(`&userAddress=${userAddress}&privateKey=${privateKey}&userRole=5`);
    cy.get('.test-login').click();
    cy.url().should('include', '/requester/dashboard') 
}

describe('新建项目',()=>{
    it('进入信息填写页', () => {
        login();
        cy.visit("#/requester/dashboard")
        cy.get('.w-\\[360px\\] > .sa-btn').click()
        cy.url().should('include', '/project/edit')
        cy.get('.mt-\\[15px\\]').should('include.text', 'Project intake form');
    });
})

// 新建项目_第一步
describe('输入项目信息',()=>{
    const randomValue = Math.floor(Math.random() * 10000);
    const inputText = `TTTESCT${randomValue}`;
    it('创建成功', () => {
        login();
        cy.visit('#/requester/project/edit')
        // 输入项目名称
        cy.get('#name').type(inputText);
        // 选择Related topics
        cy.get('.sa-select-selection-overflow').click()
        cy.get('[title="Internet"] > .sa-select-item-option-content').click()
        // 输入描述
        cy.get('#description').click().type('测试使用')
        // 断言
        cy.get('#name').should('not.have.value', '');
        // cy.get('.sa-select-selector').should('include.text','E-commerce')
        cy.get('#description').should('not.have.value','')
        
        // 进入下一步
        cy.get('.block > .w-full').click()
        cy.wait(1000)
        // 获取新页面的 URL&输入信息
        let projectId;
        cy.url().then((url) => {
            cy.log('Next page URL:', url);
            const match = url.match(/id=(\d+)/);
            projectId = match ? match[1] : null;
            cy.log('项目id',projectId)
            cy.visit(url)
            cy.get('#Telegram').click().type('1234')
            cy.url().should('include', '?step=2&id=')  
          });
        cy.get('.inline-block > .w-full').click()
        cy.wait(1000)
        cy.url().then((url) => {
            cy.log('Next page URL2:', url);
            cy.visit(url)
            cy.url().should('include', '?step=3&id=') 
            cy.get('.block > .w-full').click()
          });
    //     //   因为链接拼的int5，拿的事字符串5，所以进不去new batch页面
    //       cy.visit("#/requester/dashboard")
    //       cy.wait(1000)
    //       cy.get('[data-row-key="411"] > :nth-child(1) > .justify-start > :nth-child(2) > .sa-space > .sa-space-item > .font-InterTight').click()
    //       cy.contains('.project', projectId).should('be.visible');
    }); 
//     it('创建batch', () => {
//         login()
//         cy.visit("#/requester/dashboard")
//         cy.wait(2000)
//         cy.get('.sa-input-affix-wrapper').click().type(inputText).type("{enter}")
//         cy.wait(2000)
//         cy.get('.sa-table-row > :nth-child(1) > .justify-start').click()
//     });    
});

