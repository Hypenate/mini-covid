import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Country, CountryFacade } from '@mini-covid/mini-covid/country/data';
import { first, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryResolver implements Resolve<Country> {
  constructor(private countryFacade: CountryFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Country> {
    const countryId = route.paramMap.get('countryId');

    this.countryFacade.selectCountry(countryId);

    return this.countryFacade.selectedCountry$.pipe(first());
  }
}
