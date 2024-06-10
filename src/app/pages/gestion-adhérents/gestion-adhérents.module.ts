import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionAdhérentsComponent } from './gestion-adhérents.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    GestionAdhérentsComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule

  ]
})
export class GestionAdhérentsModule { }
