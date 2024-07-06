import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationModule } from './authentification/authentification.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from '../shared/shared.module';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';


@NgModule({
    declarations: [
  
    PieChartComponent
  ],
    imports: [
        CommonModule, 
        Ng2SmartTableModule,
        BrowserAnimationsModule,
        SharedModule,
        AuthentificationModule,
        AdminModule
    ],
    exports: [
    ]
})

export class pagesModule {}
