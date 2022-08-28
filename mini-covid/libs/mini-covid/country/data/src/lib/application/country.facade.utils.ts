import {CovidCountry, CovidCountryCountryInfo} from "../../../../../core/api/src/lib/generated";
import {Country} from "../entities/country.interface";
import {CountryInfo} from "../entities/country-info.interface";

export const mapCovidCountryToCountry = (covidCountry: CovidCountry): Country =>
  ({
    active: covidCountry.active ?? 0,
    activePerOneMillion: covidCountry.activePerOneMillion ?? 0,
    cases: covidCountry.cases  ?? 0,
    casesPerOneMillion: covidCountry.casesPerOneMillion  ?? 0,
    continent: covidCountry.continent ?? 0,
    critical:covidCountry.critical ?? 0,
    criticalPerOneMillion:covidCountry.criticalPerOneMillion  ?? 0,
    deaths: covidCountry.deaths ?? 0,
    name: covidCountry.country ?? 'unknown',
    deathsPerOneMillion: covidCountry.deathsPerOneMillion ?? 0,
    Info: mapCountryInfoToInfo(covidCountry.countryInfo),
    oneCasePerPeople: covidCountry.oneCasePerPeople ?? 0,
    oneDeathPerPeople: covidCountry.oneDeathPerPeople ?? 0,
    oneTestPerPeople: covidCountry.oneTestPerPeople ?? 0,
    population: covidCountry.population ?? 0,
    recovered: covidCountry.recovered ?? 0,
    recoveredPerOneMillion: covidCountry.recoveredPerOneMillion ?? 0,
    tests: covidCountry.tests ?? 0,
    testsPerOneMillion: covidCountry.testsPerOneMillion ?? 0,
    todayCases: covidCountry.todayCases ?? 0,
    todayDeaths: covidCountry.todayDeaths ?? 0,
    todayRecovered: covidCountry.todayRecovered ?? 0,
    updated: covidCountry.updated ?? 0
})

const mapCountryInfoToInfo = (countryInfo: CovidCountryCountryInfo | undefined): CountryInfo => ({
  flag: countryInfo?.flag ?? '',
  id: countryInfo?.id ?? 0,
  iso2: countryInfo?.iso2 ?? '',
  iso3: countryInfo?.iso3 ?? '',
  latitude: countryInfo?.lat ?? 0,
  longitude: countryInfo?._long ?? 0
})
