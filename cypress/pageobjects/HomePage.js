class HomePage {
    
    getElementaryScrollDown() {
        cy.get('.icon-chevron-down').eq(0).should('be.visible').click()
    }
   
    getSubscribeButton(){
        cy.get('#mc-embedded-subscribe').should('be.visible')
        cy.get('#mc-embedded-subscribe').should('not.be.disabled')
        cy.get('#mc-embedded-subscribe').click()
    }

}

export default HomePage;