import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Country, CountryFacade } from '@mini-covid/mini-covid/country/data';

@Component({
  selector: 'mini-covid-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<Country>();
  columns = ['name', 'todayCases', 'todayRecovered', 'todayDeaths'];

  constructor(private countryFacade: CountryFacade) {}

  ngAfterViewInit(): void {
    this.LoadCovidPerCountry();
    this.dataSource.paginator = this.paginator;
  }

  private LoadCovidPerCountry(): void {
    this.countryFacade.countryList$.subscribe((data: Country[]) => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
