import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, shareReplay } from 'rxjs';
import { Country, CountryFacade } from '@mini-covid/mini-covid/country/data';
import { CountryForm } from './form.interface';

@Injectable()
export class CountryFormService {
  form$: Observable<FormGroup<CountryForm>> =
    this.countryFacade.selectedCountry$.pipe(
      map((selectedCountry) => this.createForm(selectedCountry)),
      shareReplay({ refCount: true, bufferSize: 1 })
    );

  constructor(private countryFacade: CountryFacade) {}

  private createForm(selected: Country): FormGroup<CountryForm> {
    return new FormGroup<CountryForm>({
      name: new FormControl(
        { value: selected.name, disabled: true },
        { nonNullable: true }
      ),
      todayCases: new FormControl(
        { value: selected.todayCases, disabled: true },
        { nonNullable: true }
      ),
      todayRecovered: new FormControl(
        { value: selected.todayRecovered, disabled: true },
        {
          nonNullable: true,
        }
      ),
      todayDeaths: new FormControl(
        { value: selected.todayDeaths, disabled: true },
        { nonNullable: true }
      ),
      population: new FormControl(
        { value: selected.population, disabled: true },
        { nonNullable: true }
      ),
    });
  }
}
