/// <reference types="cypress"/>
describe('Tetsing different types of View Port', () => {
    it('iphone-xr', () => {
        cy.viewport('iphone-xr')
        cy.window().then(() => {

            // Capture start time
            const startTime = Date.now();

            cy.visit('https://strike.jainam.in');
            cy.wait(3000);
            cy.screenshot('onBeforeScreenshot');
            console.log(`Start time: ${startTime} seconds`);

            // Headers
            cy.wait(2000)
            cy.get('.icon_li > a > img').click();

            cy.get('li.active').should('be.visible');
            cy.get('.mobile_menu > .ul_wrap > .content_ul > :nth-child(2)').should('be.visible');
            cy.get('.mobile_menu > .ul_wrap > .content_ul > :nth-child(3)').should('be.visible');
            cy.get('.mobile_menu > .ul_wrap > .content_ul > :nth-child(4)').should('be.visible');
            cy.get('.mobile_menu > .ul_wrap > .content_ul > :nth-child(5)').should('be.visible');
            cy.get('.button_login > .common_anchor').should('be.visible');
            cy.xpath("//img[@class='toggle_menu close_wrap']").click();

            // live price
            cy.get('marquee').should('be.visible');

            // Common Header
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(1) > .common_header > .semi').should('be.visible');

            // Normal Text
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(2) > p').should('be.visible');
            cy.scrollTo(1000, 0);

            // PC image
            cy.get(':nth-child(1) > .image_wrap > img').should('be.visible');

            // Common Header
            cy.get('.text_features_wrap > :nth-child(1) > .gridContainer > .full_wrap > .common_header').should('be.visible');

            cy.get('.title_wrap > .common_header').should('be.visible');

            cy.get('.bracket_wrap > .mobile').should('be.visible');

            cy.get(':nth-child(3) > .data_wrap > .gridContainer > :nth-child(1) > .common_header > .semi').should('be.visible');

            cy.get(':nth-child(3) > .data_wrap > .gridContainer > :nth-child(2) > p').should('be.visible');

            //Image
            cy.get(':nth-child(3) > .image_wrap > img').should('be.visible');

            // cy.get(':nth-child(5) > .flex_test_main > .Second_div > .content_wrap').should('be.visible');

            //Button
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').should('be.visible');
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').contains('Get a Free Demo Now');
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').click();

            // // Get in Touch
            // cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').click();

            // // Full Name
            // cy.get(':nth-child(1) > :nth-child(1) > .form_field_wrap > div > .form_field').type("Strike Automation", { waitforanimations: false, animationdistancethreshold: 50 });

            // // Email
            // cy.get(':nth-child(2) > .form_field_wrap > div > .form_field').type("abc@gmail.com");

            // // Mobile No
            // cy.get(':nth-child(3) > .form_field_wrap > div > .form_field').type("9825479404");

            // // Description
            // cy.get('.col-sm-12 > .form_field_wrap > div > .form_field').type("hdif ofwohfroiufh fndfodohvofuv dofofovfjh odwoeofhjreof vfovngvnfuio fvnfeovfo vfvfovn");

            // cy.screenshot('onAfterScreenshot');

            // cy.get('#BtnSubmit').click();
            // cy.get('#BtnSubmit').click({force:true});
            // cy.get('#BtnSubmit').click();
            // cy.get('#BtnSubmit').click();

            // Capture end time.
            const endTime = Date.now();
            console.log(`End time: ${endTime} seconds`);
            const loadTime = (endTime - startTime); // Calculate load time
            console.log(`Home page load time: ${loadTime} seconds`);
            cy.log(`Page load time: ${endTime - startTime} seconds`);

            // Optionally, log a warning if load time exceeds a threshold
            if (loadTime > 1) { // Adjust threshold as needed (2 seconds in this example)
                console.warn(`Home page load time exceeded threshold! (${loadTime}s)`);
            }


        });

    });

    it('Macbook-16', () => {
        cy.viewport('macbook-16')
        cy.window().then(() => {

            // Capture start time
            const startTime = Date.now();

            cy.visit('https://strike.jainam.in');
            cy.screenshot('onBeforeScreenshot');
            console.log(`Start time: ${startTime} seconds`);

            cy.wait(5000)
           cy.get('#HomeWeb').should('be.visible');
           cy.get('#navBarWeb > :nth-child(2) > #Dashboard').should('be.visible');
           cy.get('#navBarWeb > :nth-child(3) > #Strategies').should('be.visible');
           cy.get('#navBarWeb > :nth-child(4) > #Marketplace').should('be.visible');
           cy.get('#navBarWeb > :nth-child(5) > #Backtesting').should('be.visible');
           cy.get('.nav-link').should('be.visible');
            // live price
            cy.get('marquee').should('be.visible');

            // Common Header
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(1) > .common_header > .semi').should('be.visible');

            // Normal Text
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(2) > p').should('be.visible');
            cy.scrollTo(1000, 0);

            // PC image
            cy.wait(2000)
            cy.get(':nth-child(1) > .image_wrap > img').should('be.visible');

            // Common Header
            cy.get('.text_features_wrap > :nth-child(1) > .gridContainer > .full_wrap > .common_header').should('be.visible');

            cy.get('.title_wrap > .common_header').should('be.visible');

            cy.get('.bracket_wrap > .desktop').should('be.visible');

            cy.get(':nth-child(3) > .data_wrap > .gridContainer > :nth-child(1) > .common_header > .semi').should('be.visible');

            cy.get(':nth-child(3) > .data_wrap > .gridContainer > :nth-child(2) > p').should('be.visible');

            //Image
            cy.get(':nth-child(3) > .image_wrap > img').should('be.visible');

            // cy.get(':nth-child(5) > .flex_test_main > .Second_div > .content_wrap').should('be.visible');

            //Button
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').should('be.visible');
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').contains('Get a Free Demo Now');
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').click();

            // // Get in Touch
            // cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').click();

            // // Full Name
            // cy.get(':nth-child(1) > :nth-child(1) > .form_field_wrap > div > .form_field').type("Strike Automation", { waitforanimations: false, animationdistancethreshold: 50 });

            // // Email
            // cy.get(':nth-child(2) > .form_field_wrap > div > .form_field').type("abc@gmail.com");

            // // Mobile No
            // cy.get(':nth-child(3) > .form_field_wrap > div > .form_field').type("9825479404");

            // // Description
            // cy.get('.col-sm-12 > .form_field_wrap > div > .form_field').type("hdif ofwohfroiufh fndfodohvofuv dofofovfjh odwoeofhjreof vfovngvnfuio fvnfeovfo vfvfovn");

            // cy.screenshot('onAfterScreenshot');

            // cy.get('#BtnSubmit').click();
            // cy.get('#BtnSubmit').click({force:true});
            // cy.get('#BtnSubmit').click();
            // cy.get('#BtnSubmit').click();

            // Capture end time.
            const endTime = Date.now();
            console.log(`End time: ${endTime} seconds`);
            const loadTime = (endTime - startTime); // Calculate load time
            console.log(`Home page load time: ${loadTime} seconds`);
              cy.log(`Page load time: ${endTime - startTime} milliseconds`);

            // Optionally, log a warning if load time exceeds a threshold
            if (loadTime > 1) { // Adjust threshold as needed (2 seconds in this example)
                console.warn(`Home page load time exceeded threshold! (${loadTime}s)`);

            }

        });

    });

    it('1800, 900', () => {
        cy.viewport(1800, 900);
        cy.window().then(() => {

            // Capture start time
            const startTime = Date.now();

            cy.visit('https://strike.jainam.in');
            cy.screenshot('onBeforeScreenshot');
            console.log(`Start time: ${startTime} seconds`);

            // Headers
            cy.wait(5000)
            cy.get('#HomeWeb').should('be.visible');
           cy.get('#navBarWeb > :nth-child(2) > #Dashboard').should('be.visible');
           cy.get('#navBarWeb > :nth-child(3) > #Strategies').should('be.visible');
           cy.get('#navBarWeb > :nth-child(4) > #Marketplace').should('be.visible');
           cy.get('#navBarWeb > :nth-child(5) > #Backtesting').should('be.visible');
           cy.get('.nav-link').should('be.visible');

            // live price
            cy.get('marquee').should('be.visible');

            // Common Header
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(1) > .common_header > .semi').should('be.visible');

            // Normal Text
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(2) > p').should('be.visible');
            cy.scrollTo(1000, 0);

            // PC image
            cy.get(':nth-child(1) > .image_wrap > img').should('be.visible');

            // Common Header
            cy.get('.text_features_wrap > :nth-child(1) > .gridContainer > .full_wrap > .common_header').should('be.visible');

            cy.get('.title_wrap > .common_header').should('be.visible');

            cy.get('.bracket_wrap > .desktop').should('be.visible');

            cy.get(':nth-child(3) > .data_wrap > .gridContainer > :nth-child(1) > .common_header > .semi').should('be.visible');

            cy.get(':nth-child(3) > .data_wrap > .gridContainer > :nth-child(2) > p').should('be.visible');

            //Image
            cy.get(':nth-child(3) > .image_wrap > img').should('be.visible');

            // cy.get(':nth-child(5) > .flex_test_main > .Second_div > .content_wrap').should('be.visible');

            //Button
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').should('be.visible');
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').contains('Get a Free Demo Now');
            cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').click();

            // // Get in Touch
            // cy.get(':nth-child(1) > .data_wrap > .gridContainer > :nth-child(3) > .common_anchor').click();

            // // Full Name
            // cy.get(':nth-child(1) > :nth-child(1) > .form_field_wrap > div > .form_field').type("Lorem ipsum dolor sit amet consectetuer adipiscing elit Aenean commodo ligula eget dolor Aenean massa Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus Donec quam felis", { waitforanimations: false, animationdistancethreshold: 50 });

            // // Email
            // cy.get(':nth-child(2) > .form_field_wrap > div > .form_field').type("abc@gmail.com");

            // // Mobile No
            // cy.get(':nth-child(3) > .form_field_wrap > div > .form_field').type("9825479404");

            // // Description
            // cy.get('.col-sm-12 > .form_field_wrap > div > .form_field').type("hdif ofwohfroiufh fndfodohvofuv dofofovfjh odwoeofhjreof vfovngvnfuio fvnfeovfo vfvfovn");

            // cy.screenshot('onAfterScreenshot');

            // cy.get('#BtnSubmit').click();
            // cy.get('#BtnSubmit').click({force:true});
            // cy.get('#BtnSubmit').click({force:true});
            // cy.get('#BtnSubmit').click({force:true});

            // Capture end time.
            const endTime = Date.now();
            console.log(`End time: ${endTime} seconds`);
            const loadTime = (endTime - startTime); // Calculate load time
            console.log(`Home page load time: ${loadTime} seconds`);
             cy.log(`Page load time: ${endTime - startTime}  seconds`);

            // Optionally, log a warning if load time exceeds a threshold
            if (endTime - startTime > 1) { // Adjust threshold as needed (2 seconds in this example)
                console.warn(`Home page load time exceeded threshold! (${endTime - startTime}s)`);
            }
        });
    });
})
