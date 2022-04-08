import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";

interface  IDashUser{
  n_place: string;
  etage: string;
}
@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  columns: string[] = ['n_place', 'etage','action'];
  dataSource4: MatTableDataSource<IDashUser>;
  dashboardu: IDashUser[];

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static : true}) sort : MatSort;

  constructor(private dialog: MatDialog) {
    this.dashboardu = [
      {
        n_place: '1',
        etage: '1',
      },
      {
        n_place: '2',
        etage: '1',
      },
      {
        n_place: '3',
        etage: '2',
      },
      {
        n_place: '4',
        etage: '2',
      },
      {
        n_place: '5',
        etage: '3',
      },
    ];
    this.dataSource4 = new MatTableDataSource(this.dashboardu);

  }

  ngOnInit(): void {
    this.dataSource4.paginator = this.paginator;
    this.dataSource4.sort = this.sort;
  }
  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  }

  onCreate(){
  }
}
