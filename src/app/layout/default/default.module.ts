import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from "./default.component";
import {DashbordComponent} from "../../modules/dashbord/dashbord.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {NgApexchartsModule} from "ng-apexcharts";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    NgxChartsModule,
    NgApexchartsModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ]
})
export class DefaultModule { }
