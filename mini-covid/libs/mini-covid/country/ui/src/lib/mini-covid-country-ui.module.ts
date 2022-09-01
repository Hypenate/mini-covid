import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ListComponent } from './list/list.component';

export const miniCovidCountryUiRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ListComponent],
})
export class MiniCovidCountryUiModule {}
