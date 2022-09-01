import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CountryListModule } from './list/list.module';

export const miniCovidCountryUiRoutes: Route[] = [];

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CountryListModule],
  declarations: [],
})
export class MiniCovidCountryUiModule {}
