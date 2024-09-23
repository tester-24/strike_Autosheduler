// /// <reference types="cypress"/>

// it('Login', () => {

//     cy.viewport(1750, 800);
//     cy.clearAllCookies();
//     cy.visit('https://strike.jainam.in/#/');
//    // cy.reload();

//     cy.get('.nav-link').click()
//     cy.screenshot()

//     cy.wait(3000);
//     cy.xpath("//input[@placeholder='Enter User ID']").type('J33');
//     cy.xpath("//input[@id='LoginPassword']").type('Alpha@123');
//     cy.xpath("//p[normalize-space()='Login Now']").click();

//     // OTP
//     // cy.wait(1000);
//     // cy.xpath("(//input[@class='text_form ng-pristine ng-invalid ng-touched'])").type('1');
//     // cy.xpath("(//input[@placeholder='-'])[2]").type('2');
//     // cy.xpath("(//input[@placeholder='-'])[3]").type('3');
//     // cy.xpath("(//input[@placeholder='-'])[4]").type('4');

//     // Space Mobile Application Pin
//     cy.wait(3000);
//     cy.get('[tabindex="1"]').type('0');
//     cy.get('[tabindex="2"]').type('0');
//     cy.get('[tabindex="3"]').type('0');
//     cy.get('[tabindex="4"]').type('0');

//     cy.get('.continue_button_wrap > p').click();

//     cy.log('Login successful');

//     // Click on Backtesting
//     cy.wait(4000);
//     cy.xpath("//ul[@id='navBar']//a[@id='Backtesting']").click();

//     // Click on Option dropdown
//     // cy.xpath("//span[contains(text(),'Option')]").click();

//     // Click on Proceed
//     cy.wait(1500);
//     cy.xpath("//a[normalize-space()='Proceed']").click();

//     //ADD OPTION DETAILS
//     // 1) Symbol
//     // cy.xpath("//span[contains(text(),'BANKNIFTY')]").click();

//     // 2) Underlying
//     // cy.xpath("//input[@id='UnderlyingTypevalue']").click();

//     // 3) Type

//     // 4) Entry Time
//     cy.wait(1500);
//     cy.xpath("(//kendo-icon[@class='k-i-clock k-button-icon k-icon ng-star-inserted'])[2]").click();


//     cy.xpath("(//input[@id='timepicker-1'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-1'])[1]").type("09.10");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     cy.xpath("(//input[@id='timepicker-1'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-1'])[1]").type("09.05");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     cy.wait(2000);
//     cy.xpath("(//input[@id='timepicker-1'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-1'])[1]").type("09:20");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     cy.wait(2000);
//     cy.xpath("(//input[@id='timepicker-1'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-1'])[1]").type("08:20");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     cy.wait(2000);
//     cy.xpath("(//input[@id='timepicker-1'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-1'])[1]").type("09:20");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     // 5) Exit Time

//     cy.xpath("(//input[@id='timepicker-2'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-2'])[1]").type("09:10");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     cy.wait(2000);
//     cy.xpath("(//input[@id='timepicker-2'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-2'])[1]").type("09:20");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     cy.wait(2000);
//     cy.xpath("(//input[@id='timepicker-2'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-2'])[1]").type("08:20");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

//     cy.wait(2000);
//     cy.xpath("(//input[@id='timepicker-2'])[1]").click();
//     cy.xpath("(//input[@id='timepicker-2'])[1]").type("15:15");
//     cy.scrollTo(1000, 0);
//     cy.xpath("//a[normalize-space()='Save']").click({ force: true });
//     cy.scrollTo(1000, 0);

// })
