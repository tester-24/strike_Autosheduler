/// <reference types="cypress"/>

it('Broker_Login', () => {

    cy.viewport(1750, 800);
    cy.clearAllCookies();
    cy.visit('https://uatstrike.jainam.in/#/');
    cy.wait(3000);
    cy.get('.nav-link').click()

    //Login Flow
    cy.wait(2000);
    cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-headerpanel[1]/app-login[1]/div[1]/kendo-dialog[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/kendo-textbox[1]/input[1]").type('9825479404')
    cy.get('.btn_bg_bw').click();
    cy.wait(2000);
    cy.xpath("//kendo-textbox[@placeholder='Enter Password']").type('Loop@345');
    cy.get('.btn_bg_bw').click();
    cy.log('Login successful');

    //Click On Stratergy
    cy.wait(1000)
    cy.get('#navBarWeb > :nth-child(4) > #Strategies').click({setTimeout:2000});
    
    //Click on Broker Login
    cy.wait(1000)
    //cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]').click({setTimeout:2000})
    cy.get('.dash_left_wrap > .common_anchor').click({timeout:500})
    
    
   
      //************************ Log in Flow for odin setup *********************************** 

     //Click on Odin Setup
     // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/app-broker-login[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[2]/a[1]').click()
     cy.get(':nth-child(1) > .inner_wrap > .a > .common_anchor').click({timeout:500})
     //Enter User Id 
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[1]/kendo-formfield/div/kendo-textbox/input').clear().type('M3903')
   
    // Enter Password
   cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[2]/kendo-formfield/div/div/kendo-textbox/input').type('A@1111111111')
     //  Enter FA
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/kendo-formfield/div/kendo-textbox/input').type('AOZPK2130G')
     //Click on Submit Button
     cy.get('#BtnSubmit').click({timeout:1500})
     cy.wait(9000)
     //verify success message for login
     cy.get('.ng-trigger').should('be.visible')
     cy.log('Setup Successful')
      // click on Logged In tab   
     cy.get(':nth-child(2) > .nav-link').click()
       //Login button is visible
     cy.get('.a > .greenbg').should('be.visible')
    //remove button is visible
     cy.get('.pinkbg').should('be.visible')
     //click on lOgin button
     cy.get('.a > .greenbg').click()
    // verify user m3903 log in successfully
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]').should('be.visible')
    cy.log('Broker logged in acoount successful')
    //verify Re-login button is visible
    cy.get('.a > .greenbg').should('be.visible')
    // verify Disconnect button is visible
    cy.get('.pinkbg').should('be.visible')
   // click on disconnect button
   cy.get('.pinkbg').click()
  
   //click on yes option 
   cy.get('.grey').click()  
    // verify message broker disconnect successfully
   cy.get('.ng-trigger').should('be.visible') 
   cy.log('Broker disconnected sucessfully')


  

     // **********************Remove broker flow **********************************
      //click on All Broker
    cy.get('.nav > :nth-child(1) > .nav-link').click()
    //Click on Odin Setup
     // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/app-broker-login[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[2]/a[1]').click()
    cy.get(':nth-child(1) > .inner_wrap > .a > .common_anchor').click({timeout:500})
    //Enter User Id 
    cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[1]/kendo-formfield/div/kendo-textbox/input').clear().type('M3903')
  
   // Enter Password
  cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[2]/kendo-formfield/div/div/kendo-textbox/input').type('Jainam@123')
    //  Enter FA
    cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-odin/div/div/div/div/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/kendo-formfield/div/kendo-textbox/input').type('AOZPK2130G')
    //Click on Submit Button
    cy.get('#BtnSubmit').click({timeout:1500})
    cy.wait(9000)
    cy.log('Set up Successfully Done ')
     // click on Logged In tab   
    cy.get(':nth-child(2) > .nav-link').click()
   
    //click on remove button 
    cy.get('.pinkbg').click()
    //click on yes option
    cy.get('.grey').click()
    // verify message for remove broker succssefully
    cy.get('.ng-trigger').should('be.visible')
    cy.log('Broker remove Successfully ')
   

})
