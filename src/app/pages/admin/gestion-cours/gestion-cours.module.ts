import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCoursComponent } from './gestion-cours.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    declarations: [
        GestionCoursComponent
    ],
    imports: [
        CommonModule,
        Ng2SmartTableModule

  ]
})
export class GestionCoursModule { }
