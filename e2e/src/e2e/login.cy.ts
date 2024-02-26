describe('login', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('a').contains('Fazer Login').click();
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file

    // cy.get('input[type=email]').type('andrew@mail.com');
    // cy.get('button').contains('Próximo').click();
    // cy.get('input[type=password]').type('123456');
    // cy.get('button').contains('Entrar').click();
    // expect route to be home
    cy.url().should('include', '/home');
  });
});
