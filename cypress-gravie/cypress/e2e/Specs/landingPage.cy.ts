import LandingPage from '../Pages/LandingPage';

const landingPage = new LandingPage();

describe('Test Landing Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should have a title', () => {
        landingPage
            .getTitle()
            .should(
                'contain',
                'Test | Home | Personalized Coverage, Year-Round Support, and More'
            );
    });

    it('should the data id be on the div but not the button > button is not clickable and it scrolls', () => {
        landingPage.getStartedButton().should('be.visible');
        landingPage.getStartedButton().contains('Get started');
        landingPage.getStartedButton().click();
    });
});
