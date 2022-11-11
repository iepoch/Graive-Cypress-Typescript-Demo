import { getChatsSchema } from '../Utils/schema';

describe('Testing the BombAPI ', () => {
    it('should be able to get 1 accessory from the Bomb API request', () => {
        cy.accessory().then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.a('object');
            expect(response.body.results.name).to.be.a('string');
            expect(response.body.results).to.haveOwnProperty('date_added');
        });
    });

    it('should be able to get all chats from the Bomb API request', () => {
        cy.characters().then((response) => {
            expect(response.status).to.equal(200);

            cy.validateSchema(getChatsSchema, response.body);

            expect(response.body).to.be.a('object');

            // Typically you could make your own object with the specified data and validate it
            // That would be a better test this is just a quick way run a test of deep members and show what deep members checks
            // Be sure to make your own array and validate the response array against the data as a valid test.

            const results = response.body.results;
            expect(results).to.have.deep.members(response.body.results);

            for (const i in results) {
                expect(results[i].name).to.be.a('string');
            }
        });
    });
});
