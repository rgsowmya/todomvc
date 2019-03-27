describe('Todo App - E2E Test 2', function() {
    beforeEach(function() {
      //STEP 1
      cy.visit('http://localhost:3000')
  
    })
  
       //STEP 2
       context('Testing with 2 todo', function() {
       it.only('Saves new todos', function() {
       cy.get('.new-todo')
        .type('Task 1 {enter}')
        .type('Task 2 {enter}')

        cy.get('.todo-count')
        .should('contain','2 items left')

        cy.get('.todo-list li').eq(0)
        .find('.toggle').check()

        cy.get('.filters li').eq(0)
        .should('have.text', 'All').click()

            cy.get('.todo-list li')
           .should('have.length', 2)

        cy.get('.filters li').eq(1)
        .should('have.text', 'Active').click()

            cy.get('.todo-list li')
            .should('have.length', 1)

        cy.get('.filters li').eq(2)
        .should('have.text', 'Completed').click()

             cy.get('.todo-list li')
             .should('have.length', 1)
        cy.get('.clear-completed').should('be.visible').click()
            // cy.pause()
            cy.get('.clear-completed').should('not.exist')
        
        cy.get('.filters li').eq(0)
        .should('have.text', 'All').click()
    
             cy.get('.todo-list li')
             .should('have.length', 1)
        })

       

        /*it('filter links',() =>{
            const filters =[
                {link:'Active',expectedLength:1},
                {link:'Completed',expectedLength:1},
                {link:'All',expectedLength:2}
            ]
            cy.wrap(filters)
            .each(filter =>{
                cy.contains(filter.link)
                .click()
            cy.get('.todo-list li')
            .should('have.length',filter.expectedLength)
            })
        })*/
    })
  })