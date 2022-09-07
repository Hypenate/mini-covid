import { CountryInfoDto } from './country-info-dto.interface';

export interface CountryDto {
  updated?: number;
  country?: string;
  countryInfo?: CountryInfoDto;
  cases?: number;
  todayCases?: number;
  deaths?: number;
  todayDeaths?: number;
  recovered?: number;
  todayRecovered?: number;
  active?: number;
  critical?: number;
  tests?: number;
  population?: number;
  continent?: number;
}
