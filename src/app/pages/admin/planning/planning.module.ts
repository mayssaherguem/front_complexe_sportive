import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PlanningComponent } from './planning.component';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    PlanningComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    ScheduleAllModule, 
    RecurrenceEditorAllModule
  ]
})
export class PlanningModule { }
