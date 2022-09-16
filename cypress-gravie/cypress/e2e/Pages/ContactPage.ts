
class ContactPage {
    elements = {
        contactName: () => cy.get('#input_1_1'),
        contactEmail: () => cy.get('#input_1_4'),
        contactPhone: () => cy.get('#input_1_6'),
        contactComments: () => cy.get('#input_1_5'),
        contactState: () => cy.get('#input_1_14'),
        contactStatus: () => cy.get('#choice_1_7_3'),
        submitForm: () => cy.get('#gform_submit_button_1'),
    }

    formEntry(){
        this.elements.contactName().type('John')
        this.elements.contactEmail().type('john@example.com')
        this.elements.contactPhone().type('555-555-5555')
        this.elements.contactComments().type('Stefan Clem SDET Tester just tested you form entry page')
        this.elements.contactState().select('Kentucky')
        this.elements.contactStatus().first().check()
        this.elements.submitForm().click()
}
}

export default ContactPage