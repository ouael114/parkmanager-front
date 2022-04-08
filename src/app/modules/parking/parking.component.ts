import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddUserComponent} from "../add-user/add-user.component";
import {AddParkingComponent} from "../add-parking/add-parking.component";









interface  IParking{
  n_place: string;
  etage: string;
  disponibilite: string;
  temp_occupation: string;
}
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  columns: string[] = ['n_place', 'etage', 'disponibilite', 'temp_occupation'];
  dataSource3: MatTableDataSource<IParking>;
  parkings: IParking[];

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static : true}) sort : MatSort;

  constructor(private dialog: MatDialog) {
    this.parkings = [{
      n_place: '1',
      etage: '1',
      disponibilite: 'Oui',
      temp_occupation: 'null',
    },
      {
        n_place: '4',
        etage: '1',
        disponibilite: 'non',
        temp_occupation: '2 Heures',
      },
      {
        n_place: '20',
        etage: '2',
        disponibilite: 'Oui',
        temp_occupation: 'null',
      },
      {
        n_place: '16',
        etage: '2',
        disponibilite: 'Non',
        temp_occupation: '2 Heurs',
      },
      {
        n_place: '11',
        etage: '2',
        disponibilite: 'Oui',
        temp_occupation: 'null',
      },
  ]
    this.dataSource3 = new MatTableDataSource(this.parkings);
  }

  ngOnInit(): void {
    this.dataSource3.paginator = this.paginator;
    this.dataSource3.sort = this.sort;
  }
  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AddParkingComponent);
  }

}
