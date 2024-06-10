import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PlanningComponent } from './planning.component';



@NgModule({
  declarations: [
    PlanningComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule

  ]
})
export class PlanningModule { }
