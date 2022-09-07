import type { Country } from '../entities';
import { CountryDto } from '../services/country-dto.interface';
import { mapCovidCountryToCountry } from './country.facade.utils';

describe('Country Facade utils', () => {
  it('should map an CountryDto to Country', () => {
    const countryDto: CountryDto = {
      country: 'Test',
      active: 0,
      activePerOneMillion: 1,
      cases: 2,
      casesPerOneMillion: 3,
      continent: 4,
      critical: 5,
      criticalPerOneMillion: 6,
      deaths: 7,
      deathsPerOneMillion: 8,
      oneCasePerPeople: 9,
      oneDeathPerPeople: 10,
      oneTestPerPeople: 11,
      population: 12,
      recovered: 13,
      recoveredPerOneMillion: 14,
      tests: 15,
      testsPerOneMillion: 16,
      todayCases: 17,
      todayDeaths: 18,
      todayRecovered: 19,
      updated: 20,
      countryInfo: {
        flag: 'TE',
        id: 0,
        iso2: 'iso2',
        iso3: 'iso3',
        lat: 123,
        _long: 456,
      },
    };

    const country: Country = {
      name: 'Test',
      active: 0,
      activePerOneMillion: 1,
      cases: 2,
      casesPerOneMillion: 3,
      continent: 4,
      critical: 5,
      criticalPerOneMillion: 6,
      deaths: 7,
      deathsPerOneMillion: 8,
      oneCasePerPeople: 9,
      oneDeathPerPeople: 10,
      oneTestPerPeople: 11,
      population: 12,
      recovered: 13,
      recoveredPerOneMillion: 14,
      tests: 15,
      testsPerOneMillion: 16,
      todayCases: 17,
      todayDeaths: 18,
      todayRecovered: 19,
      updated: 20,
      info: {
        flag: 'TE',
        id: 0,
        iso2: 'iso2',
        iso3: 'iso3',
        latitude: 123,
        longitude: 456,
      },
    };

    expect(mapCovidCountryToCountry(countryDto)).toEqual(country);
  });

  it('should map a CountryDto with undefined properties to Country', () => {
    const countryDto: CountryDto = {};

    const country: Country = {
      name: 'unknown',
      active: 0,
      activePerOneMillion: 0,
      cases: 0,
      casesPerOneMillion: 0,
      continent: 0,
      critical: 0,
      criticalPerOneMillion: 0,
      deaths: 0,
      deathsPerOneMillion: 0,
      oneCasePerPeople: 0,
      oneDeathPerPeople: 0,
      oneTestPerPeople: 0,
      population: 0,
      recovered: 0,
      recoveredPerOneMillion: 0,
      tests: 0,
      testsPerOneMillion: 0,
      todayCases: 0,
      todayDeaths: 0,
      todayRecovered: 0,
      updated: 0,
      info: {
        flag: '',
        id: 0,
        iso2: '',
        iso3: '',
        latitude: 0,
        longitude: 0,
      },
    };

    expect(mapCovidCountryToCountry(countryDto)).toEqual(country);
  });
});
