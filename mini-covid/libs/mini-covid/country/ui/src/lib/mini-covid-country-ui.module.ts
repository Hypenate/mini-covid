import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CountryListModule } from './list/list.module';
import { CountryFormModule } from './form/form.module';
import { FormComponent } from './form/form.component';

export const miniCovidCountryUiRoutes: Route[] = [];

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':countryId',
    component: FormComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CountryListModule,
    CountryFormModule,
  ],
  declarations: [],
})
export class MiniCovidCountryUiModule {}
