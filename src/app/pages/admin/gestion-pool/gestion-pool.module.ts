import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionPoolComponent } from './gestion-pool.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        GestionPoolComponent,
        
    ],
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        FormsModule

  ]
})
export class GestionPoolModule { }
