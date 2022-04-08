import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }
  nemail = new FormControl()
  nnom = new FormControl()
  nprenom = new FormControl()
  npassword = new FormControl()

  ngOnInit(): void {
  }

}
