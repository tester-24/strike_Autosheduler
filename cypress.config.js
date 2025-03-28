const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({

  experimentalCspAllowList: ['default-src', 'script-src', 'script-src-elem'],
  chromeWebSecurity: false,
  experimentalStudio: true,
  waitForAnimations: false,
 // projectId:"jzt3qx",
 //  projectId: "phy7ku",
 //  projectId: "m82s9h",
   //projectId: "ur94uz",
 //projectId: "ircs72",
// projectId: "2p5im6",
 //  projectId: "9h2tj2",
//  projectId: "gm9t5n",
 //projectId: "pfmc7z",
// projectId: "86iy7w",
 // projectId: "gczppd",
// projectId: "ggphrr",
projectId: "oymzc7",
  animationDistanceThreshold: 50,
  reporter: 'mochawesome',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    charts: true,
    reportPageTitle: 'Strike_Automation',
    reportFilename: '[name].html',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    html: true,
    json: true,
    video: true,
    videoCompression: true,
     saveAllAttempts: false,
    videoOnFailOnly: true,
    quiet: true,
    debug: true,
    saveJson: true,
    enableCode:false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },

});
