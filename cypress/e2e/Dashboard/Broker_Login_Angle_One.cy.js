/// <reference types="cypress"/>

it('Broker_Login', () => {

    cy.viewport(1750, 800);
    cy.clearAllCookies();
    cy.visit('https://strike.jainam.in/#/');
    Cypress.on("uncaught:exception", (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log("Cypress detected uncaught exception: ", err);
    return false;
  });
    cy.wait(3000);
   // cy.xpath("//button[@aria-label='Close']").click();
  //  cy.wait(200)
    cy.get('.nav-link').click()

    //Login Flow
    cy.wait(2000);
    cy.xpath("//input[@placeholder='Enter email ID / mobile number']").type('9825479404')
   // cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-headerpanel[1]/app-login[1]/div[1]/kendo-dialog[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/kendo-textbox[1]/input[1]").type('9825479404')
   // cy.get('.btn_bg_bw').click();
    cy.wait(2000);
    cy.xpath("//kendo-textbox[@placeholder='Enter Password']").type('Loop@345');
   // cy.get('.btn_bg_bw').click(); 
    cy.xpath('//button[normalize-space()="Log In"]').click()
    cy.log('Login successful');

    //Click On Stratergy
    cy.wait(1000)
    cy.xpath("/html/body/app-root/app-layout/app-headerpanel/div[2]/div/div/div/div[2]/ul/li[3]/a").click({setTimeout:2000});
    
    //Click on Broker Login
    cy.wait(1000)
    //cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/a[1]').click({setTimeout:2000})
    cy.get('.dash_left_wrap > .common_anchor').click({force:true},{timeout:500})
    
    
   
      //************************ Log in Flow for odin setup *********************************** 

     //Click on Angle One  Setup
     // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/app-broker-login[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[2]/a[1]').click()
     cy.wait(1000)
     cy.xpath("/html/body/app-root/app-layout/app-strategies/div[2]/div/div/div/div/div[2]/div/div/div[2]/app-broker-login/div/div/div/ul/li[2]/div[2]/div[2]/a").click({timeout:500})
     
     //Enter User Id 
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[1]/kendo-formfield/div/kendo-textbox/input').clear().type('AAAA375135')
   
    // Enter the pin
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[2]/kendo-formfield/div/kendo-numerictextbox/input').type('4049')
    //  Enter API Key
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[4]/kendo-formfield/div/kendo-textbox/input').type('6ZLl7Lsf')
     // Enter QR Code
     cy.xpath("/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[5]/kendo-formfield/div/kendo-textbox/input").type("VRMDQZ4YJCV6P5LWOOX3SVF3FA")
     
     //Click on Submit Button
     cy.xpath("/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[6]/input").click({timeout:1500})
     cy.wait(15000)
     //verify success message for login
     //cy.wait(2000)
     //cy.get('.ng-trigger').should('be.visible')
    // cy.log('Setup Successful')
      // click on Logged In tab   
     cy.get(':nth-child(2) > .nav-link').click()
       //Login button is visible
     cy.get('.a > .greenbg').should('be.visible')
    //remove button is visible
     cy.get('.pinkbg').should('be.visible')
     //click on lOgin button
     cy.xpath("//button[normalize-space()='Log in']").click()
 
    // verify user  log in successfully
    cy.wait(7000)
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]').should('be.visible')
    cy.log('Broker logged in acoount successful')
    //verify Re-login button is visible
     cy.get('.a > .greenbg').should('be.visible')
  //   // verify Disconnect button is visible
    cy.get('.pinkbg').should('be.visible')
  //  // click on disconnect button
  cy.wait(7000)
  cy.xpath("//button[normalize-space()='Disconnect']").click({force:true})
  
 //click on yes option 
      cy.get('.grey').click({force:true})  
//   //   // verify message broker disconnect successfully
//   //   cy.wait(1000)
   cy.get('.ng-trigger').should('be.visible') 
    cy.log('Broker disconnected sucessfully')


  

     // **********************Remove broker flow **********************************
       //click on All Broker
    cy.get('.nav > :nth-child(1) > .nav-link').click()
      //Click on Angle One  Setup
     // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-strategies[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/app-broker-login[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[2]/a[1]').click()
     cy.wait(1000)
     cy.xpath("/html/body/app-root/app-layout/app-strategies/div[2]/div/div/div/div/div[2]/div/div/div[2]/app-broker-login/div/div/div/ul/li[2]/div[2]/div[2]/a").click({timeout:500})
     
     //Enter User Id 
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[1]/kendo-formfield/div/kendo-textbox/input').clear().type('AAAA375135')
   
    // Enter the pin
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[2]/kendo-formfield/div/kendo-numerictextbox/input').type('4049')
    //  Enter API Key
     cy.xpath('/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[4]/kendo-formfield/div/kendo-textbox/input').type('6ZLl7Lsf')
     // Enter QR Code
     cy.xpath("/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[5]/kendo-formfield/div/kendo-textbox/input").type("VRMDQZ4YJCV6P5LWOOX3SVF3FA")
     
     //Click on Submit Button
     cy.xpath("/html/body/app-root/app-layout/app-broker-dynamic/ngx-dynamic-hooks/app-angleone/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/form/fieldset/div/div[6]/input").click({timeout:1500})
    
    cy.wait(9000)
    cy.log('Set up Successfully Done ')
     // click on Logged In tab   
    cy.get(':nth-child(2) > .nav-link').click()
   
    //click on remove button 
    cy.get('.pinkbg').click()
    //click on yes option
    cy.get('.grey').click()
    // verify message for remove broker succssefully
    cy.wait(1000)
    cy.get('.ng-trigger').should('be.visible')
    cy.log('Broker remove Successfully ')
    

})
