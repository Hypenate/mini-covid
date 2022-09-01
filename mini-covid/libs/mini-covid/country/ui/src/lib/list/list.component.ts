import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country, CountryFacade } from '@mini-covid/mini-covid/country/data';

@Component({
  selector: 'mini-covid-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Country>();
  columns = ['name', 'todayCases', 'todayRecovered', 'todayDeaths'];

  constructor(private countryFacade: CountryFacade) {}

  ngAfterViewInit(): void {
    this.LoadCovidPerCountry();
  }

  private LoadCovidPerCountry(): void {
    this.countryFacade.countryList$.subscribe((data: Country[]) => {
      this.dataSource.data = data;
      //this.dataSource.sort = this.sort;
    });
  }
}
