const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:('https://fill.dev/')
  },
  env:{
    User: {
      userName:'aleechetorres@gmail.com',
      password:'1234'
    }
  }
});
