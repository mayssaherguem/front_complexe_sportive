import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCoachsComponent } from './gestion-coachs.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    GestionCoachsComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule

  ]
})
export class GestionCoachsModule { }
