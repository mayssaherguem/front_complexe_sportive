import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DashboardComponent } from './dashboard.component';
import { StackBarComponent } from './charts/stack-bar/stack-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    StackBarComponent,
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    SharedModule

  ]
})
export class DashboardModule { }
