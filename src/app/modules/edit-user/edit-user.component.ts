import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }
  email = new FormControl()
  nom = new FormControl()
  prenom = new FormControl()
  password = new FormControl()
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nom:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['', Validators.required],
      prenom:['',Validators.required],
    })

  }

}
