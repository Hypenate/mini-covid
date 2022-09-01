import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@mini-covid/mini-covid/country/ui').then(
        (m) => m.MiniCovidCountryUiModule
      ),
  },
  // 404 must be last.
  {
    path: '**',
    redirectTo: '', // not-found component
  },
];
