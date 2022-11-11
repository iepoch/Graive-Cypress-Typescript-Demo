import LandingPage from '../Pages/LandingPage';
import ContactPage from '../Pages/ContactPage';

const landingPage = new LandingPage();
const contact = new ContactPage();

describe('Gravie Contact Us Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should now click the get started button and see the Contact Us page', () => {
        // Real Button
        landingPage.startButton().click();
        cy.url().should('include', '/contact/');
        contact.formEntry();
    });
});
