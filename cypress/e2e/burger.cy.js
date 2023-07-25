import {INGREDIENTS_URL, LOGIN_URL, ORDER_URL} from "./test-constants";

describe('service is available', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-testid=ingredients-list').as('ingredientList')
    })

    it('should be available', () => {
        cy.get('@ingredientList').should('exist')
    })

    it('should has ingredients', () => {
        cy.get('@ingredientList').should('have.length.at.least', 2)
    })
})

describe('ingredient modal works', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get("[data-testid=ingredients-list").as("ingredientList");

        cy.get('@ingredientList').eq(0).as('testIngredient');
        cy.get("@testIngredient").eq(0).children('a').eq(0).as('testInner');

        cy.get("@testInner").click();
    })

    it('should be', () => {
        cy.get('[data-testid=modal]').should('be.visible')
    })

    it('has elements', () => {
        cy.get('[data-testid=ingredientHeader]').should('exist')
        cy.get('[data-testid=ingredientData]').should('exist')
    })

    it('close button should work', () => {
        cy.get('[data-testid=close-modal]').should('exist').click()
        cy.get('[data-testid=modal]').should('not.exist')
    })
})

describe('drag works', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-testid=ingredients-list').as('ingredientList')
    })
//
    it('should move ingredients from ingredient list to basket', () => {
        const dataTransfer = new DataTransfer()

        cy.get('@ingredientList').eq(1).as('testIngredient');
        cy.get("@testIngredient").eq(0).children('a').eq(0).as('testInner');
        cy.get('@testInner').trigger('dragstart', {dataTransfer})
        cy.get('[data-testid=burgerConstructor]').trigger('drop', {dataTransfer})

        cy.get('[data-testid=constructorElement]').should('exist')
    })
})

describe('order works', () => {
    beforeEach(() => {
        cy.visit('/login')

        cy.intercept('GET', INGREDIENTS_URL, {fixture: 'ingredients.json'})

        cy.intercept('POST', LOGIN_URL, {
            fixture: 'user.json'
        }).as('postLogin')


        cy.get('[data-testid=email-input').type(`test@test.com`)
        cy.get('[type=password]').type(`testtesttest`)

        cy.get('[type=submit]').click()

        cy.wait("@postLogin")

        cy.get('[data-testid=ingredients-list').as('ingredientList')

        const dataTransfer = new DataTransfer()

        cy.get('@ingredientList').eq(0).as('testIngredient');
        cy.get("@testIngredient").eq(0).children('a').eq(0).as('testInner');
        cy.get('@testInner').trigger('dragstart', {dataTransfer})
        cy.get('[data-testid=burgerConstructor]').trigger('drop', {dataTransfer})

        cy.intercept('POST', ORDER_URL, {fixture: 'order.json'})
        cy.get('[data-testid=orderButton]').click()
    })

    it('should show order modal', () => {
        cy.get('[data-testid=modal]').should('be.visible');
    })

    it('should have order number', () => {
        cy.get('[data-testid=orderNumber').should('have.text', '42')
    })

    it('should close', () => {
        cy.get('[data-testid=close-modal]').should('exist').click()
        cy.get('[data-testid=modal]').should('not.exist')
    })
})
