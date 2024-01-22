const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    "userAddress": "0x21c20Ab4894A01672ffC2788cb0Ef78100483CF1",
    "privateKey": "cd43799b8e96c974fc1797e18d1cccd9ff8420a10b01f3eced850dea3a788bd1"
  }
});
