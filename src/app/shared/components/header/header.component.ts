import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {EditUserComponent} from "../../../modules/edit-user/edit-user.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor(private dialog: MatDialog) { }

  ngOnInit() { }
  toggleSidebar() {
  this.toggleSideBarForMe.emit();
  }

  onCreat(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(EditUserComponent);
  }
}

