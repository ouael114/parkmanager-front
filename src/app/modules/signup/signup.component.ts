import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {AuthServiceService} from "../../auth-service.service";
import {UserForLogin, UserForRegister} from "../../user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      role: new FormControl('USER')
    });
  }

  signupProces(){
    console.log(this.formGroup.value);
    if (this.formGroup.valid){
      this.authService.registerUser(this.formGroup.value).subscribe(
        (data: any)=> {
          if (data.Succeeded == true)
          this.router.navigate(['/Login2']);
        }
      )
    }
  }
}
