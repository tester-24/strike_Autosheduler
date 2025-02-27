/// <reference types="cypress"/>


it('PaperTrade', () => {

  cy.viewport(1750, 800);
  cy.clearAllCookies();
  cy.visit('https://strike.jainam.in/#/');

  cy.wait(5000);
  cy.xpath("//button[@aria-label='Close']").click({force:true});
  cy.wait(1000)
  cy.get('.nav-link').click({force:true})

  //Login Flow
  cy.wait(2000);
  cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-headerpanel[1]/app-login[1]/div[1]/kendo-dialog[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/kendo-textbox[1]/input[1]").type('9825479404')
  cy.get('.btn_bg_bw').click();
  cy.wait(2000);
  cy.xpath("//kendo-textbox[@placeholder='Enter Password']").type('Loop@345');
  cy.get('.btn_bg_bw').click();
  cy.log('Login successful');

  // Click on Backtesting
  cy.wait(4000);
  cy.xpath("/html[1]/body[1]/app-root[1]/app-layout[1]/app-headerpanel[1]/div[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[5]/a[1]").click();

  // Click on Option dropdown
  // cy.xpath("//span[contains(text(),'Option')]").click();

  // Click on Proceed
  cy.wait(1500);
  cy.xpath("//a[normalize-space()='Proceed']").click();

  //ADD OPTION DETAILS
  // 1) Symbol
  cy.xpath("//span[contains(text(),'BANKNIFTY')]").type("{downArrow}{Enter}")

  // 2) Underlying
  // cy.xpath("//input[@id='UnderlyingTypevalue']").click();

  // 3) Type

  // 4) Entry Time
  cy.wait(1500);
  cy.xpath( '/html/body/app-root/app-layout/app-option-structure/div[2]/div/div/div/div/div[2]/div/div/div/form[2]/div[1]/div/div/div[2]/div[2]/div/div/div/kendo-timepicker/button/kendo-icon-wrapper').click({force:true});


  cy.xpath("(//input[@id='timepicker-1'])").click();
  cy.xpath("(//input[@id='timepicker-1'])").should('be.visible').clear().type("15:00");
  cy.wait(500);
  cy.scrollTo(1000, 0);
//  cy.get('div.ng-star-inserted > .text-danger').should('be.visible')
  cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  cy.scrollTo(1000, 0);

  // cy.xpath("(//input[@id='timepicker-1'])[1]").click();
  // cy.xpath("(//input[@id='timepicker-1'])[1]").should('be.visible').type("09.05");
  // cy.get('div.ng-star-inserted > .text-danger').should('be.visible')
  // cy.scrollTo(1000, 0);
  // cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  // cy.scrollTo(1000, 0);

  // cy.wait(500);
  // cy.xpath("(//input[@id='timepicker-1'])[1]").click();
  // cy.xpath("(//input[@id='timepicker-1'])[1]").should('be.visible').type("09:20");
  // cy.scrollTo(1000, 0);
  // cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  // cy.scrollTo(1000, 0);

  // cy.wait(500);
  // cy.xpath("(//input[@id='timepicker-1'])[1]").click();
  // cy.xpath("(//input[@id='timepicker-1'])[1]").should('be.visible').type("08:06");
  // cy.scrollTo(1000, 0);
  // cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  // cy.scrollTo(1000, 0);

  // cy.wait(500);
  // cy.xpath("(//input[@id='timepicker-1'])[1]").click();
  // cy.xpath("(//input[@id='timepicker-1'])[1]").should('be.visible').type("09:20");
  // cy.scrollTo(1000, 0);
  // cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  // cy.scrollTo(1000, 0);

  // 5) Exit Time

  cy.xpath("(//input[@id='timepicker-2'])[1]").click();
  cy.xpath("(//input[@id='timepicker-2'])[1]").should('be.visible').type("15:15");
  cy.scrollTo(1000, 0);
 // cy.get('.time_icon_wrap > .text-danger').should('be.visible')
  cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  //cy.get('.text-danger').should('be.visible')
  cy.scrollTo(1000, 0);

  cy.wait(500);
  cy.xpath("(//input[@id='timepicker-2'])[1]").click();
  cy.xpath("(//input[@id='timepicker-2'])[1]").should('be.visible').type("15:31");
  cy.scrollTo(1000, 0);
  cy.get('.time_icon_wrap > .text-danger').should('be.visible')
  cy.xpath("//a[normalize-space()='Save']").click({ force: true });
 // cy.get('.text-danger').should('be.visible')
  cy.scrollTo(1000, 0);

  cy.wait(500);
  cy.xpath("(//input[@id='timepicker-2'])[1]").click();
  cy.xpath("(//input[@id='timepicker-2'])[1]").should('be.visible').type("15:45");
  cy.scrollTo(1000, 0);
  cy.get('.time_icon_wrap > .text-danger').should('be.visible')
  cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  cy.get('.text-danger').should('be.visible')
  cy.scrollTo(1000, 0);

  cy.wait(500);
  cy.xpath("(//input[@id='timepicker-2'])[1]").click();
  cy.xpath("(//input[@id='timepicker-2'])[1]").should('be.visible').type("15:15");
  cy.scrollTo(1000, 0);
  cy.xpath("//a[normalize-space()='Save']").click({ force: true });
  cy.scrollTo(0, 500);

// Log Builder
  //1) Total Lot
  // cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').clear();
  // cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').should('be.visible').focus().type('1000');
  // cy.scrollTo(20, 20);

  // cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').clear();
  // cy.wait(500);
  // cy.get('#legBuilder > .leg_inner_form_wrap > :nth-child(2) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .full_wrap > .form-control').should('be.visible').focus().type('1000');
  // cy.scrollTo(20, 20);

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
    //cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(1) > .form_item_wrap > .text-gray-800 > .ml-2').click();
    cy.get('.padding_x20_y10 > .leg_inner_form_wrap > .is_new_leg > :nth-child(1) > .form_item_wrap > .text-gray-800 > .ml-2').click();
    // select dropdown
    cy.xpath("(//span[@class='k-input-value-text'][normalize-space()='Points'])[1]").click();
    //cy.contains('Underlying Points').click();
    cy.xpath('/html/body/app-root/app-layout/app-option-structure/div[2]/div/div/div/div/div[2]/div/div/div/form[2]/div[5]/div/div/div/div/div[4]/div[1]/div/div/div/div[1]/div/kendo-dropdownlist/span/span').click()
    // Enter Target
    cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
    cy.get('.border-0 > .ng-star-inserted').should("be.visible");

    cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
    //cy.get('#LegTargetProfitError_0').should("be.visible");
    //cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();

    //cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('0');
   // cy.get('#LegTargetProfitError_0').should("be.visible");

   // cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
    //cy.get('.is_new_leg > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('6');

    // cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(1) > .form_item_wrap > .text-gray-800 > .ml-2').click();

    ////// Stop Loss
    //cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click();
    cy.get('.padding_x20_y10 > .leg_inner_form_wrap > .is_new_leg > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click()
    cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
    cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').should("be.visible");

    cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
  //  cy.get('#LegStopLossError_0').should("be.visible");

    cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');
   // cy.get('#LegStopLossError_0').should("be.visible");

    //cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
   // cy.get('.is_new_leg > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('5');

    /////// Trail SL
   // cy.get('#LegBuilder1 > .leg_inner_form_wrap > .is_new_leg > :nth-child(3) > .form_item_wrap > .text-gray-800 > .ml-2').click();
   cy.get('.padding_x20_y10 > .leg_inner_form_wrap > .is_new_leg > :nth-child(3) > .form_item_wrap > .text-gray-800 > .ml-2').click()
    /// X value
    cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true})
    cy.wait(500)
    cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').type('2')
   // cy.get('.py-0 > .form-control').type('2');
  //   cy.get('.py-0 > .text-danger').should("be.visible");

  //  cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true})
  //   cy.get('.py-0 > .ng-star-inserted').should("be.visible");

  //   cy.get('.py-0 > .form-control').type('10');
  // //  cy.get('#LegInstrumentMovesValError_0 > .text-danger').should("be.visible");

  // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true})
  //   cy.get('.py-0 > .ng-star-inserted').should("be.visible");

  //   cy.get('.py-0 > .form-control').type('9');



    /// Y value
    cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').type('5');
    //cy.get('#LegStopLossMovesValError_0 > .text-danger').should("be.visible");

    cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[1]/div[1]/div[1]/div[3]/kendo-numerictextbox[1]/input[1]').clear()
    cy.get('.p-0 > .text-danger').should("be.visible");

    cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').type('10');
   // cy.get('#LegStopLossMovesValError_0 > .text-danger').should("be.visible");

   cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[4]/div[3]/div[1]/div[1]/div[1]/div[3]/kendo-numerictextbox[1]/input[1]').clear()
   // cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .ng-star-inserted').should("be.visible");

    cy.get('.is_new_leg > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .p-0 > .form-control').type('7');


    ////// Re-Entry on Target
    cy.get('.full_wrap.d-flex > .full_wrap > .text-gray-800 > .ml-2').click();
   // cy.get('#LegBuilder1 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .full_wrap').click().type('{downarrow}{downarrow}{Enter}')
    cy.xpath('/html/body/app-root/app-layout/app-option-structure/div[2]/div/div/div/div/div[2]/div/div/div/form[2]/div[5]/div/div/div/div/div[5]/div[1]/div/div[2]/div/div[1]/div/kendo-dropdownlist/button').click({force:true})
    //slect values from dropdown
    cy.wait(1000)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
    cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
    cy.get(':nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');
    //cy.get('#LegReEntryTargetProfitError_0').should("be.visible");

   cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true});
    cy.get(':nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('10');
   // cy.get('#LegReEntryTargetProfitError_0').should("be.visible");

   cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true});
    cy.get(':nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(1) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('7');


    ////// Re-Entry on SL
   // cy.get('#LegBuilder1 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click();
   cy.get('.padding_x20_y10 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(2) > .form_item_wrap > .text-gray-800 > .ml-2').click()
    cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
    cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');
  //  cy.get('#LegReEntryStopLossError_0').should("be.visible");

    cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true});
    cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('8');
   // cy.get('#LegReEntryStopLossError_0').should("be.visible");

   cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true});
    cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .ng-star-inserted').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(2) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('5');

    ////// Simple Momentum
    //cy.get('#LegBuilder1 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(3) > .form_item_wrap > .text-gray-800 > .ml-2').click();
    cy.get('.padding_x20_y10 > .leg_inner_form_wrap > :nth-child(5) > :nth-child(3) > .form_item_wrap > .text-gray-800 > .ml-2').click()
    cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').clear();
    cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('1');

   cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[3]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true});
    cy.get(':nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .text-danger').should("be.visible");

    cy.get(':nth-child(5) > :nth-child(3) > .form_item_wrap > :nth-child(2) > .d-flex > .border-0 > .form-control').type('4');

    cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-option-structure[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[2]/div[5]/div[1]/div[1]/div[2]/div[1]/div[5]/div[3]/div[1]/div[1]/div[1]/div[2]/kendo-numerictextbox[1]/input[1]').clear({force:true});
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

  //// Click on Run Backtesting
 // cy.get('.secondary').click();

  //cy.get('.loader_numb').should("be.visible");

   // Initial Setup
   cy.get(".sticky_btns_wrap > :nth-child(2) > div > .ng-star-inserted").click();
  // cy.get(".k-window-titlebar").should("be.visible");
   //cy.get('[style="float: none;"] > .common_anchor').click();
   cy.wait(1000)
   cy.get('.text-start > .full_wrap > .form-control').type('user10')
   cy.wait(2000)
   cy.get('[style="float: none;"] > .common_anchor').click()
   cy.wait(4000)
//it.only('Stratergy', () => {
// cy.visit('https://strike.jainam.in/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIzNiIsIkZ1bGxOYW1lIjoiU2FnYXIgTWVwYW5pIiwiRW1haWxJZCI6InNhZ2FyQGVsaXRldGVjaG5vY3JhdHMuY29tIiwiTW9iaWxlTm8iOiI5ODI1NDc5NDA0IiwiQVBJS2V5IjoiSmFpbmFtU3RyaWtlX0FQSUtleSIsIkFwcGxpY2F0aW9uTmFtZSI6IlN0cmlrZVdlYkFQaSIsIkV4cGlyZXNPbiI6IjA3LU9jdC0yMDI0IDE0OjAwOjM2IiwiZXhwIjoxNzI4Mjg5ODM2LCJpc3MiOiJKU3BhY2VfQVBJLUlzc3VlciIsImF1ZCI6IkpTcGFjZV9BUEktQXVkaWVuY2UifQ.b51ENeTxd7iXuxF63Q832dykcopC7I3FXSeGRB1YMRo')
  // Click on my Strategies
  cy.get('#navBarWeb > :nth-child(3) > #Strategies').click({force:true});
  cy.wait(1000)

  //Search for startergy which is recently created 
  cy.wait(500)
  cy.get('#txtStrategySearch').type('user10').type('{Enter}')
  //Click on Activate Button 
  cy.wait(3000)
  cy.xpath('/html/body/app-root/app-layout/app-strategies/div[2]/div/div/div/div/div[2]/div/div/div[2]/app-my-strategies/div/div[2]/div/app-my-strategies-strategies/div[1]/div[1]/div/div[2]/div[3]/div/button').click()
  //cy.xpath('/html/body/app-root/app-layout/app-strategies/div[2]/div/div/div/div/div[2]/div/div/div[2]/app-my-strategies/div/div[2]/div/app-my-strategies-strategies/div[1]/div/div/div[2]/div[3]/div/button').click({force:true})
  //cy.get(':nth-child(1) > .inner_wrap > .sinner_wrap > .buttons_wrap > #strategy\.strategyId > .btn').click()
  //cy.get('#strategy\.strategyId > .btn').click()
  cy.wait(2000)
  
  // Click on Paper Trade 

  cy.get('.dropdown_menu > :nth-child(1) > a').should('be.visible')
  cy.get('.dropdown_menu > :nth-child(1) > a').click()


  //click on paper trade activation seeting 
  //click on check box
  cy.get('.form-check-input').click()
  // type number of items
  //cy.get('.ps-0 > .form-control').clear().type(1)
 
  cy.xpath('/html/body/app-root/app-layout/app-strategies/div[2]/div/div/div/div/div[2]/div/div/div[2]/app-my-strategies/div/div[2]/div/app-my-strategies-strategies/kendo-dialog/div[2]/div/div/form/table/tbody/tr/td[3]/div/kendo-numerictextbox/input').clear()
  cy.xpath('/html/body/app-root/app-layout/app-strategies/div[2]/div/div/div/div/div[2]/div/div/div[2]/app-my-strategies/div/div[2]/div/app-my-strategies-strategies/kendo-dialog/div[2]/div/div/form/table/tbody/tr/td[3]/div/kendo-numerictextbox/input').type(1)
  //click on activate button 
  cy.xpath('/html/body/app-root/app-layout/app-strategies/div[2]/div/div/div/div/div[2]/div/div/div[2]/app-my-strategies/div/div[2]/div/app-my-strategies-strategies/kendo-dialog/div[2]/div/div/form/div[2]/button').click()
 // click on yes Option for pop up  
 // cy.get('.k-actions > .grey').click()
 //Visible succesful message for activatuion 
  cy.wait(2000)
// cy.get('.ng-trigger').should('be.visible')
 //click on paper trade 
 cy.wait(1000)
 //cy.get('[routerlink="/strategies/papertradestrategies"]').click()

   // cy.get('.dash_left_wrap > :nth-child(2) > div.full_wrap > [routerlink="/strategies/papertradestrategies"]').click()
   // Click on Activate
   //cy.wait(2000);
   //cy.xpath("(//button[@type='button'][normalize-space()='Activate'])[1]").click();
})

  
