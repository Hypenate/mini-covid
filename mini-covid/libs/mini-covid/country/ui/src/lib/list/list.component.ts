import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '@mini-covid/mini-covid/country/data';

@Component({
  selector: 'mini-covid-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  dataSource = new MatTableDataSource<Country>();
  columns = ['name'];
}
