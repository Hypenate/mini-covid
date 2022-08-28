import { Injectable } from "@angular/core";
import { catchError, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import type { Observable } from 'rxjs';
import { BehaviorSubject, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {COVID19WorldometersApi} from "../../../../../core/api/src/lib/generated";
import {Country} from "../entities/country.interface";
import {mapCovidCountryToCountry} from "./country.facade.utils";

@Injectable({ providedIn: 'root' })
export class CountryFacade {
  private refreshCountryListSubject = new BehaviorSubject<void>(undefined);
  private refreshSelectedCountrySubject = new BehaviorSubject<void>(undefined);
  private countrySelectedIdSubject = new BehaviorSubject<string | null>(null);

  countryList$: Observable<Country[]> = this.refreshCountryListSubject.pipe(
    switchMap(() => this.covidService.v3Covid19CountriesGet()),
    map((stats) => stats.map(mapCovidCountryToCountry)),
    shareReplay({refCount: false, bufferSize: 1})
  );

  countrySelectedId$ = this.countrySelectedIdSubject.pipe(distinctUntilChanged());

  selectedCountry$: Observable<Country | null> = this.refreshSelectedCountrySubject.pipe(
    switchMap(() => this.countrySelectedId$),
    switchMap((countryId) => this.covidService.v3Covid19CountriesCountryGet(countryId)),
    catchError(() => {
      // Reroute in case of an issue, a popup will be shown by the interceptor
      this.router.navigate(['..'], {relativeTo: this.route});
      return of(null);
    }),
    map((selectedCountry) => (selectedCountry ? mapCovidCountryToCountry(selectedCountry) : null)),
    shareReplay({refCount: false, bufferSize: 1})
  );

  constructor(private covidService: COVID19WorldometersApi, private router: Router, private route: ActivatedRoute) {
  }
}

