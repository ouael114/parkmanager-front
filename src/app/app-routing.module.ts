import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {DefaultComponent} from "./layout/default/default.component";
import {DashbordComponent} from "./modules/dashbord/dashbord.component";
import {UsersComponent} from "./modules/users/users.component";
import {ParkingComponent} from "./modules/parking/parking.component";
import {UserComponent} from "./layout/user/user.component";
import {DashboardUserComponent} from "./modules/dashboard-user/dashboard-user.component";
import {SignupComponent} from "./modules/signup/signup.component";
import {Login2Component} from "./modules/login2/login2.component";

const routes: Routes = [
  {path:'Login2',
    component:Login2Component},
  {path:'Signup',
    component:SignupComponent},

  {
    path: 'User',
    component: UserComponent,
  },
  {path:'', redirectTo:'Login2', pathMatch: 'full'},
  {path: '',
    component: DefaultComponent,
    children: [{
      path: 'Dashbord',
      component: DashbordComponent
    },
 {
      path: 'Users',
      component: UsersComponent
    },
      {
        path: 'Parking',
        component: ParkingComponent,
      }
  ],
  }];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
