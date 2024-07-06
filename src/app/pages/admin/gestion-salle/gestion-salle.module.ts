import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionSalleComponent } from './gestion-salle.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    declarations: [
        GestionSalleComponent
    ],
    imports: [
        CommonModule,
        Ng2SmartTableModule

  ]
})
export class GestionSalleModule { }
