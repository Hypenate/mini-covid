import { RouterTestingModule } from '@angular/router/testing';
import type { SpectatorService } from '@ngneat/spectator/jest';
import { createServiceFactory, mockProvider } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { Country } from '../entities';
import { CountryDto } from '../services/country-dto.interface';
import { CountryApiService } from '../services/country.service';
import { CountryFacade } from './country.facade';

describe('Country Facade Service', () => {
  const defaultCountry = {
    name: '',
    active: 0,
    cases: 0,
    continent: 0,
    critical: 0,
    deaths: 0,
    info: {
      flag: '',
      id: 0,
      iso2: '',
      iso3: '',
      latitude: 0,
      longitude: 0,
    },
    population: 0,
    recovered: 0,
    tests: 0,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
    updated: 0,
  };
  let spectator: SpectatorService<CountryFacade>;
  let scheduler: TestScheduler;

  const createService = createServiceFactory<CountryFacade>({
    service: CountryFacade,
    mocks: [CountryApiService],
    imports: [RouterTestingModule],
  });

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should load CountryDto list and map to Country list', () => {
    scheduler.run(({ expectObservable }) => {
      // GIVEN
      const countryDtos: CountryDto[] = [
        {
          country: 'Hello',
        },
        {
          country: 'World',
        },
      ];

      spectator = createService({
        providers: [
          mockProvider(CountryApiService, {
            getCountries: () => of(countryDtos),
          }),
        ],
      });

      // TEST
      const destination$ = spectator.service.countryList$;

      // EXPECT
      const expectedCountryList: Country[] = [
        {
          ...defaultCountry,
          name: 'Hello',
        },
        {
          ...defaultCountry,
          name: 'World',
        },
      ];

      expectObservable(destination$).toBe('x', {
        x: expectedCountryList,
      });
    });
  });

  it('should select and load the provided Tenant', () => {
    scheduler.run(({ expectObservable, cold }) => {
      // GIVEN
      const countryDto: CountryDto = {
        country: 'Test',
      };

      const getCountryMock = jest.fn(() => of(countryDto));

      spectator = createService({
        providers: [
          mockProvider(CountryApiService, { getCountry: getCountryMock }),
        ],
      });

      // TEST
      const countrySelectedId$ = spectator.service.countrySelectedId$;
      const selectedCountry$ = spectator.service.selectedCountry$;
      spectator.service.selectCountry('TE');

      // EXPECT
      const country: Country = {
        ...defaultCountry,
        name: 'Test',
      };

      cold('-a').subscribe(() => {
        expect(getCountryMock).toHaveBeenCalledTimes(1);
        expect(getCountryMock).toHaveBeenCalledWith('TE');
      });

      expectObservable(countrySelectedId$).toBe('x', { x: 'TE' });
      expectObservable(selectedCountry$).toBe('x', {
        x: country,
      });
    });
  });

  it('should select and load only once', () => {
    scheduler.run(({ expectObservable, cold }) => {
      // GIVEN
      spectator = createService();

      // TEST
      const countrySelectedId$ = spectator.service.countrySelectedId$;
      cold('-a').subscribe(() => {
        spectator.service.selectCountry('BE');
        spectator.service.selectCountry('FR');
        // Calling with the same ID...
        spectator.service.selectCountry('FR');
      });

      // EXPECT
      // ...But should only adhere once.
      expectObservable(countrySelectedId$).toBe('a(bc)', {
        a: null,
        b: 'BE',
        c: 'FR',
      });
    });
  });
});
