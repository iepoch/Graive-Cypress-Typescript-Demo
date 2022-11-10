// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-api'
// Alternatively you can use CommonJS syntax:
// require('./commands')
// in cypress/support/index.ts
// load type definitions that come with Cypress module
// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
    
      /**
       * This validates the Schema agains the json response schema.
       * @example
       * cy.validateSchem(actualSchema, responseSchema)
      */
      validateSchema(schema: any, response: any): Chainable<Element>
        
      /**
       * Theis returns the Accessory API  with 1 item
       * @example
       * cy.acessory()
      */
      accessory(): Chainable<any>

     /**
       * Returns the Characters API with a limit of 10 character returned
        * @example
        * cy.characters()
      */
      characters(): Chainable<any>
    }
  }
}