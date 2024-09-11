/// <reference types="cypress"/>

describe('MarketOverview', () => {

  it('All DropDowns', () => {
    cy.viewport(1800, 1000)
    //Calculate the Time   
    cy.window().then(() => {

      // Capture start time
      cy.visit('https://strike.jainam.in');
      cy.wait(3000);
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
      cy.wait(5000)
      cy.get('#navBarWeb > :nth-child(2) > #Dashboard').should('be.visible')
      const startTime = Date.now();
      cy.get('#navBarWeb > :nth-child(2) > #Dashboard').click()

      //Dropdown should be visible
      cy.wait(2000)
    // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h3[1]/kendo-dropdownlist[1]/button[1]').should('be.visible')
      const endTime = Date.now();
      console.log(`End time: ${endTime} seconds`);
      const loadTime = (endTime - startTime); // Calculate load time
      console.log(`Home page load time: ${loadTime} seconds`);
      cy.log(`Page load time: ${endTime - startTime} seconds`);

      // Optionally, log a warning if load time exceeds a threshold
      if (loadTime > 2) { // Adjust threshold as needed (2 seconds in this example)
        console.warn(`Market  Page  load time exceeded threshold! (${loadTime}s)`);
      }

      // Scroll to up
     // cy.scrollTo('top')


      //Click on Nifty 50 dropdown
      cy.wait(4000)
      //cy.get('#k-dbfa3b6b-7825-47b7-aea5-129bead48651 > .k-input-button').click({force:true})
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[1]/div/div[1]/div/h3[1]/kendo-dropdownlist/button').click({force:true})

      //Select Nifty Mid Cap 100
      cy.wait(2000)
      cy.xpath('/html/body/app-root/kendo-popup/div/kendo-list/div/ul/li[5]/span').click({ force: true })
      // cy.get(':nth-child(1) > .card > .card-header > .flexy > .mlauto > .card-label').should('be.visible')


      //Click on Nifty 50 dropdown
      cy.wait(500)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[1]/div/div[1]/div/h3[1]/kendo-dropdownlist/button').click()

      // Select Nifty Small Cap 100
      cy.wait(500)
      cy.xpath('/html/body/app-root/kendo-popup/div/kendo-list/div/ul/li[8]/span').click()
      //cy.get(':nth-child(1) > .card > .card-header > .flexy > .mr-0 > .card-label').should('be.visible')


      //Click on Nifty 50 dropdown
      cy.wait(1000)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[1]/div/div[1]/div/h3[1]/kendo-dropdownlist/button').click()

      // Select Mid Cap 50
      cy.wait(500)
      cy.xpath('/html/body/app-root/kendo-popup/div/kendo-list/div/ul/li[6]/span').click()
      //cy.get(':nth-child(1) > .card > .card-body > .legends_wrap > :nth-child(2) > :nth-child(2)').should('be.visible')


      //Click on Nifty 50 dropdown
      cy.wait(1000)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[1]/div/div[1]/div/h3[1]/kendo-dropdownlist/button').click()

      // Select Nifty Energy
      cy.wait(500)
      cy.xpath('/html/body/app-root/kendo-popup/div/kendo-list/div/ul/li[11]/span').click()
      // cy.get('.col-xxl-12 > .g-5 > :nth-child(1) > .card > .card-body').should('be.visible')
      cy.scrollTo(1000, 0);

      //Click on BSE SENSEX dropdown
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/div/h3[1]/kendo-dropdownlist/button').should('be.visible')
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/div/h3[1]/kendo-dropdownlist/button').click()
      cy.scrollTo(1000, 0);
      //Select BSE Consumer Durable 
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/div/h3[1]/kendo-dropdownlist/span/span').should('be.visible')
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[9]/span').click()
      // cy.get(':nth-child(2) > .card > .card-body > .legends_wrap > :nth-child(1)').should('be.visible')
      cy.scrollTo(1000, 0);

      //select BSE SMALL CAP
       cy.wait(1000)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/div/h3[1]/kendo-dropdownlist/button').click({ force: true })
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[5]/span[1]').should('be.visible')
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[5]/span[1]').click()
      cy.get(':nth-child(2) > .card > .card-header > .flexy > .mlauto > .card-label').should('be.visible')
      cy.scrollTo(1000, 0);
      //select ChartDropdown
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[1]/div[1]/h3[1]/kendo-dropdownlist/button').should('be.visible')
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[1]/div[1]/h3[1]/kendo-dropdownlist/button').click()
      // select NiftyMid Cap 100
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[6]/span[1]').should('be.visible')
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[6]/span[1]').click()
      cy.scrollTo(1000, 0);
      //select option through typing
      cy.wait(500)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[1]/div[1]/h3[1]/kendo-dropdownlist/button').click({ force: true })
      //selcting nifty financial services
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/span[1]/input[1]').type('Nifty Financial Services').type("{enter}")
      cy.wait(500)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[1]/div[1]/h3[1]/kendo-dropdownlist/button').click({ force: true })
      //select NiftyMidcap 50
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/span[1]/input[1]').type('Nifty Midcap 50').type("{enter}")

      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[1]/div[1]/h3[1]/kendo-dropdownlist/button').click({ force: true })
      //select Nifty FMCG
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/span[1]/input[1]').type('Nifty FMCG').type("{enter}")

      //Select Heatmap Dropdown 
      cy.get('.heading_dropdown_wrap > .card-title > .card-label').should('be.visible')
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[3]/div[1]/div/div[1]/div[1]/div/div/div/kendo-dropdownlist').should('be.visible')
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[3]/div[1]/div/div[1]/div[1]/div/div/div/kendo-dropdownlist').click()
      // Nifty Midcap 100
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[5]/span[1]').click()
      cy.get('.row > :nth-child(1) > .text-gray-400').should('be.visible')

      //Nifty PSU Bank
      cy.wait(500)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[3]/div[1]/div/div[1]/div[1]/div/div/div/kendo-dropdownlist').click({ forec: true })
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[18]/span[1]').click()
      cy.get('.heading_dropdown_wrap > .card-title > .card-label').should('be.visible')

      //Nift Midcap 100
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[3]/div[1]/div/div[1]/div[1]/div/div/div/kendo-dropdownlist').click()
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[5]/span[1]').click()
      cy.get('.heading_dropdown_wrap > .card-title > .card-label').should('be.visible')


      // Top gainers dropdown
      cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/app-dashboard-charts[1]/div[1]/div[2]/div[1]/div[1]/div[1]/kendo-dropdownlist[1]').should('be.visible')
      cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/app-dashboard-charts[1]/div[1]/div[2]/div[1]/div[1]/div[1]/kendo-dropdownlist[1]').click({ force: true })

      //select nifty mid cap 100
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[5]/span[1]').click({ force: true })
      cy.get('.col-xxl-4.pos_relative > app-dashboard-charts > .card > .card-body').should('be.visible')
      cy.scrollTo('center');
      // nifty metal
      cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/app-dashboard-charts[1]/div[1]/div[2]/div[1]/div[1]/div[1]/kendo-dropdownlist[1]').click({force:true})
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[16]/span[1]').click({ force: true })
      cy.get('.col-xxl-4.pos_relative > app-dashboard-charts > .card > .card-body > .flexspbn').should('be.visible')
      // Nifty Reality
      cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/app-dashboard-charts[1]/div[1]/div[2]/div[1]/div[1]/div[1]/kendo-dropdownlist[1]').click({force:true})
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[15]/span[1]').click({ force: true })
      cy.get('.col-xxl-4.pos_relative > app-dashboard-charts > .card > .card-body').should('be.visible')

      //Top Losers dropdown
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[2]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').should('be.visible')
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[2]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').click()
      //select nifty auto
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[10]/span[1]').click()
      cy.get(':nth-child(2) > .pos_relative > app-dashboard-charts > .card > .card-body').should('be.visible')

      // select nifty media
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[2]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').click()
      // cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[15]/span[1]').should('be.visible')
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[15]/span[1]').click({ force: true })

      //select nifty It
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[2]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').click()
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[14]').click({ force: true })
      //cy.scrollTo(0,500);
      // 52 Week High dropdown
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[4]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').should('be.visible')
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[4]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').click()
      //cy.scrollTo(0,500)
      //select Nifty small cap 100
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[8]/span[1]').should('be.visible')
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[8]/span[1]').click()

      // Select Nifty Auto
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[4]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').click()
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[10]/span[1]').click()

      //52 week low dropdown
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[5]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').should('be.visible')
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[5]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').click()

      //select nifty next 50
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[7]/span[1]').click()

      //select nifty it
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[5]/div/app-dashboard-charts/div/div[2]/div[1]/div/div/kendo-dropdownlist').click()
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[14]').click({ force: true })
    });
  });

   it('View all buttons', () => {
    cy.viewport(1800, 1000)
    //Calculate the Time   
    cy.window().then(() => {

      // Capture start time
      cy.visit('https://strike.jainam.in/Market-Overview');
      cy.wait(3000);
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
      cy.wait(3000)
     // cy.get('#navBar > :nth-child(2) > #Dashboard').should('be.visible')
      const startTime = Date.now();
     // cy.get('#navBar > :nth-child(2) > #Dashboard').click()

      //Dropdown should be visible
      cy.wait(2000)
     // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h3[1]/kendo-dropdownlist[1]/button[1]').should('be.visible')
      const endTime = Date.now();
      console.log(`End time: ${endTime} seconds`);
      const loadTime = (endTime - startTime); // Calculate load time
      console.log(`Home page load time: ${loadTime} seconds`);
      cy.log(`Page load time: ${endTime - startTime} seconds`);

      // Optionally, log a warning if load time exceeds a threshold
      if (loadTime > 2) { // Adjust threshold as needed (2 seconds in this example)
        console.warn(`Market  Page  load time exceeded threshold! (${loadTime}s)`);
      }

     // click on View all FII DII activity
      cy.wait(1000) 
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[3]/div/div[2]/div/a').click({setTimeout:1000})
      cy.wait(3000)
     // cy.xpath('/html/body/app-root/app-layout/app-fii-dii-page/div/div/div/div/div/div/div/div/div/div/div[1]/div/h3/span').should('be.visible')
    
      cy.go('back')
      cy.wait(1000)
      //cy.scrollTo('top')
     
      // Click on Top gainers view all(7 day%)
      cy.wait(3000)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[1]/app-dashboard-charts/div/div[2]/div[1]/a').click({force:true})
      //cy.get('.col-xxl-4.pos_relative > app-dashboard-charts > .card > .card-body > .flexspbn > a').click({ force: true },{timeout:500})

      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr")>0) {
        cy.log('Records available')
      }
      
      cy.xpath('/html/body/app-root/app-layout/app-top-gainers-losers/div/div/div/div/div/div[3]/div/kendo-grid/div/div/div/table/thead/tr/th[4]/span/span/kendo-dropdownlist/button/kendo-icon-wrapper/kendo-icon').click({force:true})
      // select (30 days %)
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').click({force:true},{timeout:1000})
      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan', 0)) {
        cy.log('Records available')
      }

      // //click on Top gainers view all (30 days %)
      cy.xpath('/html/body/app-root/app-layout/app-top-gainers-losers/div/div/div/div/div/div[3]/div/kendo-grid/div/div/div/table/thead/tr/th[5]/span/span/kendo-dropdownlist').click({force:true},{timeout:500})

      //select (7 days %)
    
      cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click({force:true},{timeout:500})
      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr")>=0) {
        cy.log('Records available')
      }
     cy.go('back')

    // //   //click on  Top Losers view all (7 day%)
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[2]/div/app-dashboard-charts/div/div[2]/div[1]/a').click({force:true})
     // cy.get(':nth-child(2) > .pos_relative > app-dashboard-charts > .card > .card-body > .flexspbn > a').click()

      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan', 0)) {
        cy.log('Records available')
      }
      cy.wait(1000)
     //cy.xpath('/html/body/app-root/app-layout/app-top-gainers-losers/div/div/div/div/div/div[2]/div/kendo-grid/div/div/div/table/thead/tr/th[4]/span/span/kendo-dropdownlist/button').click({force:true})

      //click on Top Losers view all (30 days %)
      cy.xpath('/html/body/app-root/app-layout/app-top-gainers-losers/div/div/div/div/div/div[3]/div/kendo-grid/div/div/div/table/thead/tr/th[5]/span/span/kendo-dropdownlist/button').click({timeout:2000})

      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan', 0)) {
        cy.log('Records available')
      }

      //click top losers view all on (30 days %)
      cy.wait(1000)
      cy.xpath('/html/body/app-root/app-layout/app-top-gainers-losers/div/div/div/div/div/div[3]/div/kendo-grid/div/div/div/table/thead/tr/th[5]/span/span/kendo-dropdownlist/button').click({force:true})

      //select (7 days %)
      cy.xpath('/html/body/app-root/app-layout/app-top-gainers-losers/div/div/div/div/div/div[3]/div/kendo-grid/div/div/div/table/thead/tr/th[5]/span/span/kendo-dropdownlist/button').click()

      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan', 0)) {
        cy.log('Records available')
      }
      cy.go('back')

      // //click on 52 Week high view all
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[4]/div/app-dashboard-charts/div/div[2]/div[1]/a').click({force:true})
      cy.wait(1000)
      //cy.get(':nth-child(4) > :nth-child(4) > .pos_relative > app-dashboard-charts > .card > .card-body > .flexspbn > a').click()

      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan', 0)) {
        cy.log('Records available')
      }
      cy.go('back')


      // click on 52 week low
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[2]/div/app-dashboard-charts/div/div[2]/div[1]/a').click({force:true},{timeout:1000})
      //cy.get(':nth-child(5) > .pos_relative > app-dashboard-charts > .card > .card-body > .flexspbn > a').click()
      //cy.wait(3000)
      if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan', 0)) {
        cy.log('Records available')
      }
      cy.go('back')
    });
  });


  it('Click on Calender', () => {
    cy.viewport(1800, 1000)
    //Calculate the Time   
    cy.window().then(() => {

      // Capture start time
      cy.visit('https://strike.jainam.in/Market-Overview');
      cy.wait(3000);
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
      cy.wait(2000)
      cy.get('#navBarWeb > :nth-child(2) > #Dashboard').should('be.visible')
      const startTime = Date.now();
      cy.get('#navBarWeb > :nth-child(2) > #Dashboard').click()

      //Dropdown should be visible
      cy.wait(2000)
      // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h3[1]/kendo-dropdownlist[1]/button[1]').should('be.visible')
      const endTime = Date.now();
      console.log(`End time: ${endTime} seconds`);
      const loadTime = (endTime - startTime); // Calculate load time
      console.log(`Home page load time: ${loadTime} seconds`);
      cy.log(`Page load time: ${endTime - startTime} seconds`);

      // Optionally, log a warning if load time exceeds a threshold
      if (loadTime > 2) { // Adjust threshold as needed (2 seconds in this example)
        console.warn(`Market  Page  load time exceeded threshold! (${loadTime}s)`);
      }

      // Scroll to up
      cy.scrollTo('top')


      // click on Result calender
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[6]/div/div/a').click({ setTimeout: 1000 })
      // cy.wait(1000)
      //check data is visible or not
      if (cy.xpath("table[class='k-grid-table k-table k-table-md']>tbody>tr") > 0) {
        cy.log('records available')

      }
      else {
        cy.log('No records available')
        cy.wait(1000)
       // cy.xpath('/html/body/app-root/app-layout/app-corporate-action-page/div/div/div/div/div/div[2]/div/div/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td').should('be.visible')
      }

      //Click on Dividends
      cy.wait(1000)
      cy.xpath('/html/body/app-root/app-layout/app-corporate-action-page/div/div/div/div/div/div[2]/h3/ul/li[2]/a').click({force:true})
      if (cy.xpath("table[class='k-grid-table k-table k-table-md']>tbody>tr") > 0) {
        cy.log('records available')

      }
      else {
        cy.log('No records available')
       // cy.xpath('/html/body/app-root/app-layout/app-corporate-action-page/div/div/div/div/div/div[2]/div/div/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td').should('be.visible')
      }
      //Click on  Right Issue
      cy.wait(1000)
      cy.xpath('/html/body/app-root/app-layout/app-corporate-action-page/div/div/div/div/div/div[2]/h3/ul/li[3]/a').click()

      if (cy.xpath("table[class='k-grid-table k-table k-table-md']>tbody>tr") > 0) {
        cy.log('records available')

      }
      else {
        cy.log('No records available')
       // cy.xpath('/html/body/app-root/app-layout/app-corporate-action-page/div/div/div/div/div/div[2]/div/div/div/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td').should('be.visible')
      }
      cy.go('back')
      cy.scrollTo('top')
    });
  });
  it('Recent News', () => {
    cy.viewport(1800, 1000)
    //Calculate the Time   
    cy.window().then(() => {

      // Capture start time
      cy.visit('https://strike.jainam.in/Market-Overview');
      cy.wait(3000);
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
      cy.wait(5000)
      cy.get('#navBarWeb > :nth-child(2) > #Dashboard').should('be.visible')
      const startTime = Date.now();
      cy.get('#navBarWeb > :nth-child(2) > #Dashboard').click()

      //Dropdown should be visible
      cy.wait(2000)
      // cy.xpath('/html[1]/body[1]/app-root[1]/app-layout[1]/app-dashboard[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h3[1]/kendo-dropdownlist[1]/button[1]').should('be.visible')
      const endTime = Date.now();
      console.log(`End time: ${endTime} seconds`);
      const loadTime = (endTime - startTime); // Calculate load time
      console.log(`Home page load time: ${loadTime} seconds`);
      cy.log(`Page load time: ${endTime - startTime} seconds`);

      // Optionally, log a warning if load time exceeds a threshold
      if (loadTime > 2) { // Adjust threshold as needed (2 seconds in this example)
        console.warn(`Market  Page  load time exceeded threshold! (${loadTime}s)`);
      }

      // Scroll to up
      // click on Recent News
      cy.xpath('/html/body/app-root/app-layout/app-dashboard/div/div/div/div/div/div/div[2]/div/div[4]/div[7]/div/div/div[2]/a').click()
      
      //cy.wait(1000)
      cy.go(-1)

    });
  });
})







