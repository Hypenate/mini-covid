import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CountryDto } from './country-dto.interface';
@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  // Define API
  apiURL = 'https://disease.sh/v3/covid-19';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch employees list
  getCountries(): Observable<CountryDto[]> {
    return this.http
      .get<CountryDto[]>(this.apiURL + '/countries')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch employee
  getCountry(id: string): Observable<CountryDto> {
    return this.http
      .get<CountryDto>(this.apiURL + '/countries/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
