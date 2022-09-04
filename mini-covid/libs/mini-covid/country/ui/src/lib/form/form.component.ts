import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country, CountryFacade } from '@mini-covid/mini-covid/country/data';

@Component({
  selector: 'mini-covid-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  constructor(private countryFacade: CountryFacade) {}
}
