import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
