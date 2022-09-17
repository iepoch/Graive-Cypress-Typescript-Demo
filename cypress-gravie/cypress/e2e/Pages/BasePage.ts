
class BasePage {

    elements = {
        title :() =>cy.title(),
        members: () => cy.get('id=menu-item-2234'),
        brokers: () => cy.get('id=menu-item-4016'),
        employers:() => cy.get('id=menu-item-2330'),
        getStartedButton: () =>cy.get('[data-id=fd1db9c]'),
        startedButton:() => cy.get('.elementor-button-text')
        
    }
    getTitle () {
        return this.elements.title()
    }
    getStartedButton (){
            return this.elements.getStartedButton()
    }
    startButton(){
        return this.elements.startedButton().contains('Get started')
    }

    
}

export default BasePage;