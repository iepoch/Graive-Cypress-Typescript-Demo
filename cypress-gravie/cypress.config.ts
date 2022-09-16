import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.gravie.com/',
  }
})


