describe('login', () => {
  beforeEach(() => cy.visit('/'));

  it('should login', () => {
    // should redirect to home
    cy.url().should('include', '/home');

    // Custom command example, see `../support/commands.ts` file
    cy.login('andrew@mail.com', '123456');

    // Function helper example, see `../support/app.po.ts` file
  });
});
