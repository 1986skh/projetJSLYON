const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    localUrl: 'http://localhost:3000',
    serverUrl:'http://localhost:3310/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
