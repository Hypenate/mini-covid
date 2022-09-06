import {
  getName,
  getPopulation,
  getTodayCases,
  getTodayDeaths,
  getTodayRecovered,
} from '../support/countries-form.po';

describe('mini-covid', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://disease.sh/v3/covid-19/countries/BE', {
      fixture: 'country.json',
    }).as('country');

    cy.visit('/BE');

    cy.wait('@country');
  });

  it('should have the correct values', () => {
    getName().should('have.value', 'Belgium');
    getTodayCases().should('have.value', '170');
    getTodayRecovered().should('have.value', '114');
    getTodayDeaths().should('have.value', '0');
    getPopulation().should('have.value', '40834375');
  });

  it('should have a back button', () => {
    cy.intercept('GET', 'https://disease.sh/v3/covid-19/countries', {
      fixture: 'countries.json',
    }).as('countries');

    cy.get('button').click();

    cy.wait('@countries');
  });
});
