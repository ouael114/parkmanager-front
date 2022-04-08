import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../auth-service.service";
import {Router} from "@angular/router";


export class Parkinglog {
  constructor(
    public id_place: number,
    public id_user: number,
    public temps_arrive: number,
    public temps_sortie: number,

  ) {
  }
}




interface  IDashbord{
  id_place: string;
  id_user: string;
  temps_arrive: String;
  temps_sortie: String;
}

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  columns: string[] = ['id_place', 'id_user', 'temps_arrive', 'temps_sortie'];
  dataSource5: MatTableDataSource<IDashbord>;
  dashboard: IDashbord[];
  parkinglog: Parkinglog[];
  formGroup: FormGroup;
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static : true}) sort : MatSort;
  constructor(private dialog: MatDialog,private httpClient: HttpClient,private authService: AuthServiceService,private router: Router) {

    this.dashboard = [{
      id_place: '2',
      id_user: '1',
      temps_arrive: '08/04/2022 10:20',
      temps_sortie: '08/04/2022 12:00',
    },
      {
        id_place: '3',
        id_user: '6',
        temps_arrive: '08/04/2022 08:20',
        temps_sortie: '08/04/2022 12:00',
      },

    ];
    this.dataSource5 = new MatTableDataSource(this.dashboard);
  }
  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource5.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getParkinglog();
    this.formGroup = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      role: new FormControl('USER')
    });
  }


  getParkinglog(){
    this.httpClient.get<any>('http://localhost:3000/log').subscribe(
      response => {
        console.log(response);
        this.parkinglog = response;
      }
    )

  }

  onCreate(){
      console.log(this.formGroup.value);
      if (this.formGroup.valid){
        this.authService.registerUser(this.formGroup.value).subscribe(
          (data: any)=> {
            if (data.Succeeded == true)
              this.router.navigate(['/Login2']);
  })}}



}
