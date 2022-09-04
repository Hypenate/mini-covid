import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class CountryFormModule {}
