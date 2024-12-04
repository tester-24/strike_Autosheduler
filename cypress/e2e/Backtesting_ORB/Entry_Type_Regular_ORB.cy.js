it("Option Backtesting", () => {
       cy.viewport(1750, 800);
       cy.clearAllCookies();
       cy.visit("https://strike.jainam.in");
  
        Cypress.on("uncaught:exception", (err) => {
          // returning false here prevents Cypress from
          // failing the test
          console.log("Cypress detected uncaught exception: ", err);
          return false;
        });
  
        // cy.reload();
        cy.wait(2000);
        cy.get(".nav-link").click({force:true});
  
        //Login Flow
        cy.wait(1000);
        cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-headerpanel[1]/app-login[1]/div[1]/kendo-dialog[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/kendo-textbox[1]/input[1]").type('9825479404')
        cy.get(".btn_bg_bw").click();
        cy.wait(1000);
        cy.xpath("//kendo-textbox[@placeholder='Enter Password']")
        .should("be.visible")
        .type("Loop@345");
        cy.get(".btn_bg_bw").click();
        cy.log("Login successful");
  
         // Click on Backtesting
        cy.wait(1000);
        cy.get('#navBarWeb > :nth-child(5) > #Backtesting').click();
  
         //click on dropdown
         cy.xpath('/html/body/app-root/app-layout/app-headerpanel/kendo-dialog/div[2]/div/div/div/div/div/div/kendo-dropdownlist').click()
    
        // Click on Option dropdown
         cy.wait(500)
         cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
   
        // Click on Proceed
        cy.wait(1500);
        cy.xpath("//a[normalize-space()='Proceed']").click({force:true});
        
        //ORB Basic Functionalities 
        //Click on  Symbol dropdown
        cy.wait(2000)
       cy.get(':nth-child(1) > :nth-child(1) > .form_item_wrap > .full_wrap > .form-control').click({force:true})
       //cy.xpath('/html/body/app-root/app-layout/app-orb-structure/div/div/div/div/div/div/div[2]/div/div/form[2]/div[1]/div/div[1]/div[1]/div/div/kendo-multiselect/kendo-taglist/kendo-searchbar/input').click()
        //select symbol 3MINDIA
        cy.wait(500)
        cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[13]/span[1]').click()
        
        //delete selected symbol just for checking validation
        cy.get('.badge > .fa').click()
        // verify validation message 
        cy.get('.full_wrap > .text-danger').should('be.visible')
        
        //Select Symbol 
        cy.get(':nth-child(1) > :nth-child(1) > .form_item_wrap > .full_wrap > .form-control').type('hdfcbank').type('{downarrow}{enter}').click()
        cy.wait(2000)
       
        //click on Entry Type dropdown
        cy.xpath('/html/body/app-root/app-layout/app-orb-structure/div/div/div/div/div/div/div[2]/div/div/form[2]/div[1]/div/div[1]/div[2]/div/div/div/kendo-dropdownlist').click()
       
        // select Regular type
        cy.wait(500)
        cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()

        //Validation for Range strat time
        cy.get('#timepicker-1').clear()
        //Validation message 
        cy.get('.full_wrap > .text-danger').should('be.visible')
        cy.get('#timepicker-1').type('09:16')

         //Validation for Range End time
         cy.get('#timepicker-2').clear()
         //Validation message 
         cy.get('.full_wrap > .text-danger').should('be.visible')
         cy.get('#timepicker-2').type('09:25')
 
         //Validation for Exit time
         cy.get('#timepicker-3').clear()
         //Validation message 
         cy.get('.full_wrap > .text-danger').should('be.visible')
         cy.get('#timepicker-3').type('15:15')

         //Validation for qunatity
         cy.get(':nth-child(3) > :nth-child(1) > .form_item_wrap > .full_wrap > .form-control').clear()
         cy.get('.full_wrap > .text-danger').should('be.visible')
         cy.get(':nth-child(3) > :nth-child(1) > .form_item_wrap > .full_wrap > .form-control').type(2)
          
          //Validation for No of trades
          cy.get(':nth-child(3) > :nth-child(2) > .form_item_wrap > .full_wrap > .form-control').clear()
          cy.get('.full_wrap > .text-danger').should('be.visible')
          cy.get(':nth-child(3) > :nth-child(2) > .form_item_wrap > .full_wrap > .form-control').type(2)
 
        //ORB BASIC FUNCTIONALITY 
        cy.get('.ng-invalid.ng-dirty > :nth-child(2)').should('be.visible')
        // Buy ENTRY AND EXIT SECTION
        cy.get('.ng-invalid.ng-dirty > :nth-child(3)').should('be.visible')
        // SELL ENTRY AND EXIT SECTION
        cy.get('.ng-invalid.ng-dirty > :nth-child(4)').should('be.visible')
     
         //TARGET AND STOP LOSS
        
         //select checkbox for target
         cy.get(':nth-child(1) > :nth-child(1) > .text-gray-800 > .ml-2').click()
         //click on percentage dropdown
         cy.xpath('/html/body/app-root/app-layout/app-orb-structure/div/div/div/div/div/div/div[2]/div/div/form[2]/div[5]/div/div/div[1]/div/div/div[1]/kendo-dropdownlist/button').click({force:true})
         // select point
         cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
         // verify validation message for 
         cy.get('.full_wrap > .text-danger').should('be.visible')
         // enter target  value
         cy.get(':nth-child(1) > :nth-child(1) > .full_wrap.d-flex > .form_item_wrap > .full_wrap > .form-control').type(2)

         //select checkbox for stop loss
         cy.get(':nth-child(2) > :nth-child(1) > .text-gray-800 > .ml-2').click()
         //click on percentage dropdown
         cy.xpath('/html/body/app-root/app-layout/app-orb-structure/div/div/div/div/div/div/div[2]/div/div/form[2]/div[5]/div/div/div[1]/div/div/div[1]/kendo-dropdownlist/button').click({force:true})
         // select point
         cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
         // verify validation message for 
         cy.get('.full_wrap > .text-danger').should('be.visible')
         // enter target  value
         cy.get(':nth-child(1) > :nth-child(1) > .full_wrap.d-flex > .form_item_wrap > .full_wrap > .form-control').clear().type(2)
          // verify validation message for 
          cy.get('.full_wrap > .text-danger').should('be.visible')
          // type stop loss values
          cy.get(':nth-child(2) > :nth-child(1) > .full_wrap.d-flex > .form_item_wrap > .full_wrap > .form-control').type(1)
        // click on Traid SL Chceckbox
        cy.get(':nth-child(3) > .form_item_wrap > .text-gray-800 > .ml-2').click()
        // verify validation message for 
        cy.get('.py-0 > .ng-star-inserted').should('be.visible')
         // verify validation message for 
         cy.get('.p-0 > .ng-star-inserted').should('be.visible')
         // enter x value
         cy.get('.py-0 > .form-control').type(1)
         //enter y value
         cy.get(':nth-child(5) > .leg_inner_form_wrap > .row > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').type(1)
      //      // click on save button
      //  cy.get('.sticky_btns_wrap > div > .ng-star-inserted').click()
      //  //Enter stratergy name
      //  cy.get('.position-relative > .form-control').type('user155')
      //  //click on confirm button
      //  cy.get('[style="float: none;"] > .common_anchor').click()
      //  cy.wait(500)
      //  cy.get('.ng-trigger').should("be.visible");
      //clkick on no
     // cy.get('.k-button-solid-primary').click()
       //click on runbacktest
       cy.get('.secondary').click()
       //validation for data 
       cy.wait(7000)
       cy.get('#BackTestResultView > :nth-child(2)').should('be.visible')

})  
