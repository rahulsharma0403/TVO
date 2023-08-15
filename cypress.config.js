const { defineConfig } = require("cypress");
const getspecFiles = require("cypress-gitlab-parallel-runner")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      getspecFiles('./cypress/e2e',true)
      // implement node event listeners here
    }, 
    viewportHeight: 900,
    viewportWidth: 1400,
  },
});
