import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionTerrainFootComponent } from './gestion-terrain-foot.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    declarations: [
        GestionTerrainFootComponent
    ],
    imports: [
        CommonModule,
        Ng2SmartTableModule

  ]
})
export class GestionTerrainFootModule { }
