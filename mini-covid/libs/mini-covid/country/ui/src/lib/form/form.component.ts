import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryFacade } from '@mini-covid/mini-covid/country/data';
import { CountryFormService } from './form.service';

@Component({
  selector: 'mini-covid-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CountryFormService],
})
export class FormComponent {
  constructor(
    private countryFacade: CountryFacade,
    private formService: CountryFormService
  ) {}

  form$ = this.formService.form$;
}
