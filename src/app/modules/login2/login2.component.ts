import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../auth-service.service";
import {UserForLogin} from "../../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
formGroup: FormGroup;
  constructor(private authService: AuthServiceService,
  private router: Router
) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(
        (response: UserForLogin)=>{
          console.log(response)
          const user = response;

          localStorage.setItem('email', user.email);
          this.router.navigate(['/Parking']);
        }
      )
      }
    }
  }

