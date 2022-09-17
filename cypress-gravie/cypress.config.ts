import { defineConfig } from "cypress"; 
import dotenvPlugin from "cypress-dotenv";

export default defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on: any, config: any) {
       config = dotenvPlugin(config)
       return config
    },
    baseUrl: 'https://www.gravie.com/',
  }
})


