import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionAdhérentsComponent } from './gestion-adhérents.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    GestionAdhérentsComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    SharedModule
  ]
})
export class GestionAdhérentsModule { }
