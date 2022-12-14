import { Injectable } from '@angular/core';
import {
  catchError,
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  switchMap,
} from 'rxjs/operators';
import type { Observable } from 'rxjs';
import { BehaviorSubject, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../entities/country.interface';
import { mapCovidCountryToCountry } from './country.facade.utils';
import { CountryApiService } from '../services/country-api.service';
import { CountryDto } from '../services/country-dto.interface';

@Injectable({ providedIn: 'root' })
export class CountryFacade {
  private refreshCountryListSubject = new BehaviorSubject<void>(undefined);
  private refreshSelectedCountrySubject = new BehaviorSubject<void>(undefined);
  private countrySelectedIdSubject = new BehaviorSubject<string | null>(null);

  countryList$: Observable<Country[]> = this.refreshCountryListSubject.pipe(
    switchMap(() => this.covidService.getCountries()),
    map((stats) => stats.map(mapCovidCountryToCountry)),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  countrySelectedId$ = this.countrySelectedIdSubject.pipe(
    distinctUntilChanged()
  );

  selectedCountry$: Observable<Country> =
    this.refreshSelectedCountrySubject.pipe(
      switchMap(() => this.countrySelectedId$),
      filter((countryId): countryId is string => !!countryId),
      switchMap((countryId) => this.covidService.getCountry(countryId)),
      // For simplicity added here, should be moved outside the facade, since it should be agnostic.
      catchError(() => {
        // Reroute in case of an issue, a popup will be shown by the interceptor
        this.router.navigate(['..'], { relativeTo: this.route });
        return of(null);
      }),
      filter(
        (selectedCountry): selectedCountry is CountryDto => !!selectedCountry
      ),
      map((selectedCountry) => mapCovidCountryToCountry(selectedCountry)),
      shareReplay({ refCount: false, bufferSize: 1 })
    );

  constructor(
    private covidService: CountryApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectCountry(iso2: string | null) {
    this.countrySelectedIdSubject.next(iso2);
  }
}
