import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionTerrainPadelComponent } from './gestion-terrain-padel.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        GestionTerrainPadelComponent
    ],
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        SharedModule

  ]
})
export class GestionTerrainPadelModule { }
