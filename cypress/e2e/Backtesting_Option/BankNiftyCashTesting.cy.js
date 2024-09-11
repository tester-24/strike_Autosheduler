/// <reference types="cypress"/>

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
    cy.wait(5500);
    cy.get(".nav-link").click();
  
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
    cy.wait(5000);
    cy.get('#navBarWeb > :nth-child(5) > #Backtesting').click();
  
    // Click on Option dropdown
    // cy.xpath("//span[contains(text(),'Option')]").click();
  
    // Click on Proceed
    cy.wait(1500);
    cy.xpath("//a[normalize-space()='Proceed']").click();
  
    //ADD OPTION DETAILS
    // 1) Symbol
    // cy.xpath("//span[contains(text(),'BANKNIFTY')]").click();
  
    // 2) Underlying
    // cy.xpath("//input[@id='UnderlyingTypevalue']").click();
  
    // 3) Type
  
    // 4) Entry Time
    cy.wait(3000);
    cy.xpath( "(//kendo-icon[@class='k-i-clock k-button-icon k-icon ng-star-inserted'])[2]").click({force:true});
  
    cy.xpath("(//input[@id='timepicker-1'])[1]").click();
    cy.xpath("(//input[@id='timepicker-1'])[1]")
      .should("be.visible")
      .type("09.10");
    cy.scrollTo(1000, 0);
    cy.get("div.ng-star-inserted > .text-danger").should("be.visible");
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.scrollTo(1000, 0);
  
    cy.xpath("(//input[@id='timepicker-1'])[1]").click();
    cy.xpath("(//input[@id='timepicker-1'])[1]")
      .should("be.visible")
      .type("09.05");
    cy.get("div.ng-star-inserted > .text-danger").should("be.visible");
    cy.scrollTo(1000, 0);
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.scrollTo(1000, 0);
  
    cy.wait(500);
    cy.xpath("(//input[@id='timepicker-1'])[1]").click();
    cy.xpath("(//input[@id='timepicker-1'])[1]")
      .should("be.visible")
      .type("09:20");
    cy.scrollTo(1000, 0);
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.scrollTo(1000, 0);
  
    cy.wait(500);
    cy.xpath("(//input[@id='timepicker-1'])[1]").click();
    cy.xpath("(//input[@id='timepicker-1'])[1]")
      .should("be.visible")
      .type("08:06");
    cy.scrollTo(1000, 0);
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.scrollTo(1000, 0);
  
    cy.wait(500);
    cy.xpath("(//input[@id='timepicker-1'])[1]").click();
    cy.xpath("(//input[@id='timepicker-1'])[1]")
      .should("be.visible")
      .type("09:20");
    cy.scrollTo(1000, 0);
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.scrollTo(1000, 0);
  
    // 5) Exit Time
  
    cy.xpath("(//input[@id='timepicker-2'])[1]").click();
    cy.xpath("(//input[@id='timepicker-2'])[1]")
      .should("be.visible")
      .type("15:50");
    cy.scrollTo(1000, 0);
    cy.get(".time_icon_wrap > .text-danger").should("be.visible");
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.get(".text-danger").should("be.visible");
    cy.scrollTo(1000, 0);
  
    cy.wait(500);
    cy.xpath("(//input[@id='timepicker-2'])[1]").click();
    cy.xpath("(//input[@id='timepicker-2'])[1]")
      .should("be.visible")
      .type("15:31");
    cy.scrollTo(1000, 0);
    cy.get(".time_icon_wrap > .text-danger").should("be.visible");
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.get(".text-danger").should("be.visible");
    cy.scrollTo(1000, 0);
  
    cy.wait(500);
    cy.xpath("(//input[@id='timepicker-2'])[1]").click();
    cy.xpath("(//input[@id='timepicker-2'])[1]")
      .should("be.visible")
      .type("15:45");
    cy.scrollTo(1000, 0);
    cy.get(".time_icon_wrap > .text-danger").should("be.visible");
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.get(".text-danger").should("be.visible");
    cy.scrollTo(1000, 0);
  
    cy.wait(500);
    cy.xpath("(//input[@id='timepicker-2'])[1]").click();
    cy.xpath("(//input[@id='timepicker-2'])[1]")
      .should("be.visible")
      .type("15:15");
    cy.scrollTo(1000, 0);
    cy.xpath("//a[normalize-space()='Save']").click({ force: true });
    cy.scrollTo(0, 500);
  
   // Log Builder
      //1) Total Lot
      cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').clear();
      cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').should('be.visible').focus().type('1000');
      cy.scrollTo(20, 20);
  
      cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').clear();
      cy.wait(500);
      cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').should('be.visible').focus().type('1000');
      cy.scrollTo(20, 20);
  
      //2) Expiry
      cy.wait(3000)
     // cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
  
      //3)Position
      cy.get('#LBPositionSell').click();
  
      //4)option type
      cy.get('#LBOptionTypeCE').click();
  
      // Click on Add new button
      cy.get('.col-12 > .common_anchor').click();
  
      // verify leg 1 is created or not
      cy.get('.font_med > .col-12 > .blue_ucase > :nth-child(1)').should("be.visible");
  
      ////// Target profit
      cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(1) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      // select dropdown
      cy.xpath("(//span[@class='k-input-value-text'][normalize-space()='Points'])[1]").click();
      cy.contains('Underlying Points').click();
  
      // Enter Target
      cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get('.border-0 > .ng-star-inserted').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
      //cy.get('#LegTargetProfitError_0').should("be.visible");
      cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
  
      cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('0');
      cy.get('#LegTargetProfitError_0').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('6');
  
      // cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(1) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      ////// Stop Loss
      cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
    //  cy.get('#LegStopLossError_0').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');
     // cy.get('#LegStopLossError_0').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('5');
  
      /////// Trail SL
      cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(3) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      /// X value
      cy.get('.py-0 > .form-control').type('0');
      cy.get('#LegInstrumentMovesValError_0 > .text-danger').should("be.visible");
  
      cy.get('.py-0 > .form-control').clear();
      cy.get('.py-0 > .ng-star-inserted').should("be.visible");
  
      cy.get('.py-0 > .form-control').type('10');
    //  cy.get('#LegInstrumentMovesValError_0 > .text-danger').should("be.visible");
  
      cy.get('.py-0 > .form-control').clear();
      cy.get('.py-0 > .ng-star-inserted').should("be.visible");
  
      cy.get('.py-0 > .form-control').type('9');
  
      /// Y value
      cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').type('5');
      //cy.get('#LegStopLossMovesValError_0 > .text-danger').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').clear();
      cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .ng-star-inserted').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').type('10');
     // cy.get('#LegStopLossMovesValError_0 > .text-danger').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').clear();
      cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .ng-star-inserted').should("be.visible");
  
      cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').type('7');
  
  
      ////// Re-Entry on Target
      cy.get('.full_wrap.d-flex > .full_wrap > .text-gray-800 > .ml-2').click();
      cy.get('#LegBuilder1 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .full_wrap').click().type('{downarrow}{downarrow}{Enter}')
  
      cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');
      //cy.get('#LegReEntryTargetProfitError_0').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
     // cy.get('#LegReEntryTargetProfitError_0').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('7');
  
  
      ////// Re-Entry on SL
      cy.get('#LegBuilder1 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');
    //  cy.get('#LegReEntryStopLossError_0').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('8');
     // cy.get('#LegReEntryStopLossError_0').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('5');
  
      ////// Simple Momentum
      cy.get('#LegBuilder1 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(3) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');
  
      cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('4');
  
      cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");
  
      cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('5');
  
  
      ////// Range Break out
    //  cy.get('#LegBuilder1 > .leg_inner_form_wrap > :nth-child(6) > .pe-0 > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
    //  cy.get('.ng-trigger').should("be.visible");
  
  
      /////// Overall Strategy Settings ///////
      ///// Overall Target
      cy.get('.leg_inner_form_wrap > :nth-child(1) > :nth-child(1) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      cy.get('.leg_inner_form_wrap > :nth-child(1) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .full_wrap').click().type('{downarrow}{Enter}')
  
     // cy.get(':nth-child(1) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      //cy.get(':nth-child(1) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");
  
     // cy.get(':nth-child(1) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
  
  
      ///// Overall SL
      cy.get('.leg_inner_form_wrap > :nth-child(1) > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
    //  cy.get(':nth-child(1) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      //cy.get(':nth-child(1) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");
  
     // cy.get(':nth-child(1) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('20');
  
  
      ///// Overall Re-Entry On Overall Target
      cy.get(':nth-child(2) > :nth-child(1) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      cy.get(':nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .full_wrap').click().type('{downarrow}{downarrow}{Enter}');
  
      cy.get(':nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");
  
      cy.get(':nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
  
  
      ///// Overall Re-Entry On SL Hit
      cy.get(':nth-child(2) > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      cy.get(':nth-child(2) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .full_wrap').click().type('{downarrow}{Enter}');
  
      cy.get(':nth-child(2) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
      cy.get(':nth-child(2) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");
  
      cy.get(':nth-child(2) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('11');
  
      ///// Overall Traling SL
      cy.get(':nth-child(3) > .col-12 > .form_item_wrap > .text-gray-800 > .ml-2').click();
  
      cy.get('.form-control.mr-2 > .form-control').type('2');
      cy.get(':nth-child(3) > .col-12 > .form_item_wrap > :nth-child(2) > .d-flex > :nth-child(3) > .form-control').type('4');
  
  
  
    cy.get("#datepicker-4").clear();
    cy.get("div.ng-star-inserted > .text-danger").should("be.visible");
  
    cy.get("#datepicker-4").type("2024-2023");
  
    //// Click on Run Backtesting
    cy.get(".secondary").click();
  
    cy.get(".loader_numb").should("be.visible");
    cy.wait(85000);
  
    if (
      cy.xpath("/html/body/app-root/app-layout/app-option-structure/div[2]/div/div/div/div/div[2]/div/div/div/div/app-back-test-result/div[1]/div[2]/div/div[2]/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr")
        .should('have.length.above', 0)) 
        {
      cy.log("data found");
    } 
    else {
      cy.log("No data found");
    }
  
    ///// Click on Save Strategies
  cy.get(".sticky_btns_wrap > :nth-child(2) > div > .ng-star-inserted").click();

  cy.get(".k-window-titlebar").should("be.visible");

  cy.get('[style="float: none;"] > .common_anchor').click();

  cy.get(".text-start > .full_wrap > .form-control").type("Test1");

  

    const baseName = "Test";
    let index = 1;
  
    const checkNameAndSubmit = (name) => {
      // Clear and type the name into the textbox
      cy.get(".text-start > .full_wrap > .form-control").clear().type(name);
      // Click the submit button
      cy.get('[style="float: none;"] > .common_anchor').click();
  
      // Return the promise to be used in the recursion
      return cy.get(".error-message").should("not.exist");
    };
  
    const findUniqueName = () => {
      const nameToTest = `${baseName}${index}`;
      
      return checkNameAndSubmit(nameToTest).then(() => {
        // If no error message exists, check for success
        cy.get('.success-message').should('be.visible').then(() => {
          // Unique name found, end recursion
          cy.log(`Unique name found: ${nameToTest}`);
        }).catch(() => {
          // If no success message, increment index and retry
          index++;
          findUniqueName(); // Recursively check the next name
        });
      });
    };
  
    it('should find a unique name and submit', () => {
      cy.visit('your-page-url'); // Replace with your actual URL
  
      // Start the recursive search
      findUniqueName();
    });

  
  //if (cy.get(".full_wrap > :nth-child(3) > .text-danger").should("be.visible"))
    // Click on save Button
   // cy.get('[style="float: none;"] > .common_anchor').click();

 // cy.get(".ng-trigger").should("be.visible");

  // Click on Strategies
  cy.get("#navBar > :nth-child(3) > #Strategies").click();

  // Click on my Strategies
  cy.get(
    '.dash_left_wrap > :nth-child(2) > div.full_wrap > [routerlink="/strategies/mystrategies"]'
  ).click();

  // Click on Activate
  cy.wait(2000);
  cy.xpath(
    "(//button[@type='button'][normalize-space()='Activate'])[1]"
  ).click();
  // cy.get(':nth-child(1) > .inner_wrap > .sinner_wrap > .buttons_wrap > #strategy\.strategyId > .btn').click();

  // Click on Live trade

  // cy.xpath("//a[normalize-space()='Live Trade']").click();

  // cy.get('.ng-trigger').should("be.visible");

  // Click on Broker Login
  cy.get(".dash_left_wrap > :nth-child(2) > .common_anchor").click();

  // 1) AliceBlue
  cy.get(":nth-child(3) > .inner_wrap > .a > .common_anchor").click();

  // User id
  cy.get(":nth-child(1) > .form_field_wrap > :nth-child(2) > .form_field").type(
    "1311739"
  );

  // APi Key
  cy.get(":nth-child(2) > .form_field_wrap > :nth-child(2) > .form_field").type(
    "fcIoF0TybGnWzqR4auLjf6o9AtPvrltCsGoWZRSeekH3ZQomBj3bhMhLECUf8SoXL6kq38sjBvScYJm29uEegQkX38FVqrD6lm7P2yGYn1SWMMfoFztVrCR5LIzq7iov"
  );

  cy.get("#BtnSubmit").click();

  //cy.get(".a > .greenbg").should("be.visible");

 // cy.get(".a > .greenbg").click();

 // cy.wait(5000);
 // cy.get(".a > .greenbg").click();
});

  