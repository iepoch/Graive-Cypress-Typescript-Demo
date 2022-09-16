import LandingPage from "../Pages/LandingPage"
import ContactPage from "../Pages/ContactPage";

const landingPage = new LandingPage();
const contact = new ContactPage();
describe('Gravie Landing Page', () => {
   
    beforeEach(() => {
        cy.visit('/') })

it('should have a title', () => { 
    landingPage.getTitle().should('contain', 'Gravie | Home | Personalized Coverage, Year-Round Support, and More')
})

it('should the data id be on the div but not the button > button is not clickable and it scrolls', () => {
    landingPage.getStartedButton().should('be.visible')
    landingPage.getStartedButton().contains('Get started')
    landingPage.getStartedButton().click()
 
 });


 
 






})
