describe('mini-covid', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://disease.sh/v3/covid-19/countries', {
      fixture: 'countries.json',
    }).as('countries');

    cy.visit('/');

    cy.wait('@countries');
  });

  it('should display a list of items', () => {
    cy.get('td').should('be.visible');
  });

  it('should have the correct values', () => {
    cy.get('td').eq(0).should('contain.text', 'Belgium');
    cy.get('td').eq(1).should('contain.text', '170');
    cy.get('td').eq(2).should('contain.text', '114');
    cy.get('td').eq(3).should('contain.text', '0');
  });

  it('should be able to navigate', () => {
    cy.intercept('GET', 'https://disease.sh/v3/covid-19/countries/BE', {
      fixture: 'country.json',
    }).as('country');

    cy.get('td').eq(1).click();

    cy.wait('@country');
  });
});
