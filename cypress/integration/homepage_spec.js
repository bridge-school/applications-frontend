describe('The home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('h2').contains('Cohort Application Forms');
  });

  // to do - server stub...
  // it('Loads available forms on page load', () => {
  //   cy.server();
  //   cy.route('GET', '/applications', 'fixture:forms');
  //   cy.visit('/');
  //   cy.get('[data-cy=cohort-forms] li').should('have.length', 5);
  // });

  // it.only('Displays an error on failure', () => {
  //   cy.server();
  //   cy.route({
  //     url: '/applications',
  //
  //
  //   });
  // });
});
