describe('Introduction_task_adm', () => {

    const USER_LOGIN = 'god';
    const USERNAME = 'test_player_for_qt';
    const Username = 'test_player_for_qt';

    it('Introduction_task_adm', () => {

        cy.visit('https://platform.betskilla.com')
        cy.viewport(1920, 1080)

        cy.get('#input-Connexion').type(USER_LOGIN)
            .should('have.value', USER_LOGIN)

        cy.get("input[type='password']").type('god')

        cy.get('#button_sign_in').click()

        cy.get('#button_settings').click()

        cy.get(':nth-child( 2 ) > .sc-boKtkb > .sc-jqUVSM').click()

        cy.get('[tabindex="0"][style="width: 196px;"]').click()

        cy.get('#mui-5 > .sc-evZas').click()

        cy.get('#button_menu_Users_users').click()

        cy.get('#input_Search_by_username').type(USERNAME)
            .should('have.value', USERNAME)

        cy.get(':nth-child(3) > :nth-child(4) > div').click()

        cy.get('#input-Amount').type('0.3').should('have.value', '0.3').click()

        cy.get('#button_user_profile_deposit').click()

        cy.get('#button-Confirm').click()
    })
    it('Introduction_task_user', function () {

        cy.visit('https://betskilla.com/')
        cy.viewport(1920, 1080)

        cy.get('.sc-cyRTDc').click()
        cy.get(':nth-child(2) > img').click()

        cy.get('.sc-kLKKgF').click()

        cy.get('#text-field-text-Username-id > .sc-eDWCr').type(Username).should('have.value', Username)
        cy.get('#text-field-password-Password-id > .sc-eDWCr').type(Username).should('have.value', Username)

        cy.get('#styled-button').click()

        cy.get('.sc-jFYche').click()

        cy.get('[title="History of operations"] > .sc-hhOBVt').click()

        cy.get('.sc-PBEJI').click()

        cy.get('.sc-gSyvRN > :nth-child(3)').click()

        cy.get(':nth-child(15) > #desktop-game-small > [style="position: relative; width: 239.429px; height: 239.429px;"] > .sc-fvEvSO > .sc-jRwbcX').click()

    });

})