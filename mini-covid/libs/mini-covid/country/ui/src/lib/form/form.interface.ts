import { FormControl } from '@angular/forms';
import { Country } from '@mini-covid/mini-covid/country/data';

export interface CountryForm {
  name: FormControl<Country['name']>;
  todayCases: FormControl<Country['todayCases']>;
  todayRecovered: FormControl<Country['todayRecovered']>;
  todayDeaths: FormControl<Country['todayDeaths']>;
  population: FormControl<Country['population']>;
}
