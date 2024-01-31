import {login} from "./function";

describe('新建项目', () => {
    const randomValue = Math.floor(Math.random() * 10000);
    const inputText = `TTTESCT${randomValue}`;
  
    it('进入信息填写页', () => {
        login("requester");
        cy.wait(500);
        cy.url().should('include', '/requester/dashboard');
        cy.get('.w-\\[360px\\] > .sa-btn').click()
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
    // 创建project成功
    cy.wait(1000)
    cy.url().then((url) => {
        cy.log('Next page URL2:', url);
        cy.visit(url)
        cy.url().should('include', '?step=3&id=') 
        cy.get('.block > .w-full').click()
        cy.wait(500)
    //新建batch
    cy.get('.absolute > .justify-start > .justify-around').click()
    cy.get(':nth-child(1) > .flex-col > :nth-child(3) > .heading6').click()
    cy.get('.sa-upload-drag-container > .flex > :nth-child(1) > .iconfont').click()

    });
  });
});

