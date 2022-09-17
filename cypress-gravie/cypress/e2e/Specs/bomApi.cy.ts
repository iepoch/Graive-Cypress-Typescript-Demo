import cypress = require("cypress")



describe("Testing the BombAPI ", () =>{
let api_key: any 
   before(() => {
    api_key = Cypress.env('APIKEY')
   })
    it("should be able to get 1 accessory from the Bomb API request", () => {
       
        cy.request({
            method: "GET",
            url: 'https://www.giantbomb.com/api/accessory/3000-1/',
            qs:{
                "api_key": api_key,
                "format": "json"
            },
            headers:{
                "x-api-key": api_key
            }
        }).then(response =>{
            expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            expect(response.body.results.name).to.be.a('string');
            expect(response.body.results).to.haveOwnProperty('date_added');
        })
    })


    it("should be able to get all chats from the Bomb API request", () => {
       
        cy.request({
            method: "GET",
            url: 'https://www.giantbomb.com/api/characters/',
            qs:{
                "api_key": api_key,
                "format": "json",
                "limit": 10,
            },
            headers:{
                "x-api-key": api_key
            }
        }).then(response =>{
            expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
             let results = response.body.results
            for(let i in results){
                expect(results[i].name).to.be.a('string');
            }
        })
    })
})