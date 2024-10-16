/// <reference types="cypress"/>

// it('Broker_Login', () => {

//     cy.viewport(1750, 800);
//     cy.clearAllCookies();
//     cy.visit('https://strike.jainam.in/#/');
//     cy.wait(3000);
//     cy.get('.nav-link').click()

//     //Login Flow
//     cy.wait(2000);
//     cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-headerpanel[1]/app-login[1]/div[1]/kendo-dialog[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/kendo-textbox[1]/input[1]").type('9825479404')
//     cy.get('.btn_bg_bw').click();
//     cy.wait(2000);
//     cy.xpath("//kendo-textbox[@placeholder='Enter Password']").type('Loop@345');
//     cy.get('.btn_bg_bw').click();
//     cy.log('Login successful');

//     //Click On Stratergy
//     cy.wait(3000)
//     cy.get('#navBarWeb > :nth-child(3) > #Strategies').click({setTimeout:2000});
    
//     //Click on Broker Login
//     cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]').click({setTimeout:2000})

//     //Click on Alice Blue Setup
//     cy.get(':nth-child(3) > .inner_wrap > .a > .common_anchor').click()

//     //Enter User Id 
//     cy.get(':nth-child(1) > .form_field_wrap > :nth-child(2) > .form_field').type(1311739)
// // Enter Api Key
//     cy.get(":nth-child(2) > .form_field_wrap > :nth-child(2) > .form_field").type("fcIoF0TybGnWzqR4auLjf6o9AtPvrltCsGoWZRSeekH3ZQomBj3bhMhLECUf8SoXL6kq38sjBvScYJm29uEegQkX38FVqrD6lm7P2yGYn1SWMMfoFztVrCR5LIzq7iov");
    
//       cy.get("#BtnSubmit").click();


// })
