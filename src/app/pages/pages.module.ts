import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionAdhérentsModule } from './gestion-adhérents/gestion-adhérents.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GestionCoachsModule } from './gestion-coachs/gestion-coachs.module';
import { PlanningModule } from './planning/planning.module';


@NgModule({
    declarations: [
  ],
    imports: [
        CommonModule, 
        Ng2SmartTableModule,
        BrowserAnimationsModule,
        AuthentificationModule,
        DashboardModule,
        GestionAdhérentsModule,
        GestionCoachsModule,
        PlanningModule
    ],
    exports: [
    ]
})

export class pagesModule {}
