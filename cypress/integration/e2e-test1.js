describe('Todo App - E2E 1', function() {
    beforeEach(function() {
      //STEP 1
      cy.visit('http://localhost:3000')
  
    })
  
       //STEP 2
       context('With no todos', function() {
       it.only('Saves new todos', function() {
       cy.get('.new-todo')
        .type('Task 1 {enter}')
  
        //STEP 3
        cy.get('.todo-list li')
          .should('have.length', 1)
  
        //STEP 4 - Click the All button and check if the task is listed
        cy.get('.filters li').eq(0)
            .should('have.text', 'All').click()

            cy.get('.todo-list li')
            .should('have.length', 1)

        //STEP 5 - Click the Active button and check if the task is listed
        cy.get('.filters li').eq(1)
        .should('have.text', 'Active').click()

             cy.get('.todo-list li')
             .should('have.length', 1)

        //STEP 6 - Click the Completed button and check if the no task is listed
        cy.get('.filters li').eq(2)
        .should('have.text', 'Completed').click()

             cy.get('.todo-list li')
             .should('have.length', 0)

        //STEP 7 - Click the All button and click the check box
        cy.get('.filters li').eq(0)
            .should('have.text', 'All').click()
        cy.get('.todo-list li').eq(0).find('.toggle').check()

        //STEP 8 - When the checkbox is clicked the Clear completed link should be visible and also the list should be cleared.
            cy.get('.clear-completed').should('be.visible').click()
            // cy.pause()
            cy.get('.clear-completed').should('not.exist')

        //STEP 9 -  The TODO List should be empty
        cy.get('.todo-list li')
             .should('have.length', 0)

      })
    })
  })