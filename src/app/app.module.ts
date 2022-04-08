import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from "./layout/default/default.module";
import {MatTableModule} from "@angular/material/table";
import { UsersComponent } from './modules/users/users.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from "@angular/material/dialog";
import { EditUserComponent } from './modules/edit-user/edit-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { ParkingComponent } from './modules/parking/parking.component';
import { UserComponent } from './layout/user/user.component';
import {SharedModule} from "./shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidebarUserComponent } from './layout/sidebar-user/sidebar-user.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { DashboardUserComponent } from './modules/dashboard-user/dashboard-user.component';
import { AddParkingComponent } from './modules/add-parking/add-parking.component';
import { AddUserComponent } from './modules/add-user/add-user.component';
import {ChartComponent} from "@swimlane/ngx-charts";
import { SignupComponent } from './modules/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { Login2Component } from './modules/login2/login2.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUserComponent,
    ParkingComponent,
    UserComponent,
    SidebarUserComponent,
    DashboardUserComponent,
    AddParkingComponent,
    AddUserComponent,
    SignupComponent,
    Login2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    FlexModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
