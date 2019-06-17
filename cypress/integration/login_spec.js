describe('Login form', function() {
  beforeEach(function() {
    cy.fixture('admin.json').as('admin');
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.visit('/login');
  });

  it('greets with Admin Login', function() {
    cy.contains('h2', 'Admin Login');
  });

  it('focuses email input on load', () => {
    cy.focused().should('have.id', 'username');
  });

  it('requires email and password', function() {
    cy.get('form').submit();
    cy.contains('enter an email and password');
  });

  it('requires email', function() {
    cy.get('#password').type(this.admin.password);
    cy.get('form').submit();
    cy.contains('enter an email');
  });

  it('requires password', function() {
    cy.get('#username').type(this.admin.username);
    cy.get('form').submit();
    cy.contains('enter the password');
  });

  it('will show error if login is invalid', function() {
    cy.get('#username').type('error@error.com');

    cy.get('#password').type('no');

    cy.get('form').submit();

    cy.contains('Invalid');
  });

  it('will login Admin successfully and redirect to /admin', function() {
    cy.get('#username')
      .type(this.admin.username)
      .should('have.value', this.admin.username);

    cy.get('#password')
      .type(this.admin.password)
      .should('have.value', this.admin.password);

    cy.get('form').submit();

    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/admin');
    });
  });
});
