import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Data} from "@angular/router";
import {UserForLogin, UserForRegister} from "./user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {
  }

  login(user: UserForLogin): Observable<any> {
    return this.http.post(`http://localhost:3000/users/login`, user);
  }

  registerUser(user: UserForRegister): Observable<any> {
    return this.http.post('http://localhost:3000/users/signup', user);
  }


  addparking(parking: UserForRegister): Observable<any> {
    return this.http.post('http://localhost:3000/admin/', parking);
  }
}
