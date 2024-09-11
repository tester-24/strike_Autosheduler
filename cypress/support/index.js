require('cypress-xpath')
Cypress.on('window:before:load', win => {
    cy.stub(win.console, 'log', msg => {
        cy.task('log', `console.log --> ${msg}`)
    })
    cy.stub(win.console, 'error', msg => {
        cy.task('log', `console.error --> ${msg}`)
    })
})
module.exports = (on, config) => {
    on('task', {
        log(message) {
            console.log(message)
            return null
        },
    })
}