import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PromiseCOVID19WorldometersApi } from '../../../../libs/mini-covid/core/api/src/lib/generated/types/PromiseAPI';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
      errorHandler: console.error,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
