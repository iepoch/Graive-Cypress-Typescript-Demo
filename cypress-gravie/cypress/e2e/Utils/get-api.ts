
let httpOptions;

export const accessory = () => {
    httpOptions = {
        method: 'GET',
        url:'/accessory/3000-1/',
        qs: {
            "api_key": Cypress.env('APIKEY'),
            "format": "json",
        },
        headers:{
            "x-api-key": Cypress.env('APIKEY')
        }
    }

    cy.api(httpOptions).then(response =>{
        return cy.wrap(response);
    })

}

export const characters = () => {

    httpOptions = {
        method: "GET",
        url: '/characters/',
        qs:{
            "api_key": Cypress.env('APIKEY'),
            "format": "json",
            "limit": 10,
        },
        headers:{
            "x-api-key": Cypress.env('APIKEY')
        }
    }
    cy.api(httpOptions).then(response =>{
        return cy.wrap(response);
    })

}