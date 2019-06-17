describe('applications API', () => {
  it('returns JSON', () => {
    cy.request('http://localhost:8081/applications')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
});
