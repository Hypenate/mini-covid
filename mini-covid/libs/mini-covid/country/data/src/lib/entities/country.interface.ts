import { CountryInfo } from './country-info.interface';

export interface Country {
  updated: number;
  name: string;
  info: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  tests: number;
  population: number;
  continent: number;
}
