describe('Admin page', function() {
  beforeEach(function() {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.visit('/admin');
  });

  it('redirects to login page if user is not authenticated', () => {
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/login');
    });
  });

  it('shows page for all cohorts if user is authenticated', () => {
    cy.login();
    cy.contains('All Cohort Application Forms');
  });
});
