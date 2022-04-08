import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    SharedModule,

  ]
})
export class DashbordModule { }
