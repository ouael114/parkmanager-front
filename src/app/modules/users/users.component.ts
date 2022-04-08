import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, } from "@angular/material/paginator";
import {filter} from "rxjs";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditUserComponent} from "../edit-user/edit-user.component";
import {AddUserComponent} from "../add-user/add-user.component";
import {HttpClient} from "@angular/common/http";

export class Users {
  constructor(
    public nom:string,
    public prenom:string,
  public email:string,
  public password:string,
  ) {
  }}
interface  IUser{
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columns: string[] = ['nom', 'prenom', 'email', 'password'];
  dataSource2: MatTableDataSource<IUser>;
  users: Users[];
  userss: IUser[];


  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static : true}) sort : MatSort;
  constructor(
    private dialog: MatDialog,private httpClient: HttpClient) {
    this.userss = [{
      nom: 'Ouael',
      prenom: 'Alo',
      email: 'test@gmail.com',
      password: '123soleil',
    },
      ]
    this.dataSource2 = new MatTableDataSource(this.userss);
  }

  ngOnInit(): void {
    this.getUsers;
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }
  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AddUserComponent);
  }
  getUsers(){
    this.httpClient.get<any>('http://localhost:3000/users/').subscribe(
      response =>{
        this.users = response;
      }
    );
  }
}


