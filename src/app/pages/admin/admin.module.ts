import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionAdhérentsModule } from './gestion-adhérents/gestion-adhérents.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GestionCoachsModule } from './gestion-coachs/gestion-coachs.module';
import { PlanningModule } from './planning/planning.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionCoursModule } from './gestion-cours/gestion-cours.module';
import { GestionPoolModule } from './gestion-pool/gestion-pool.module';
import { GestionSalleModule } from './gestion-salle/gestion-salle.module';
import { GestionTerrainFootModule } from './gestion-terrain-foot/gestion-terrain-foot.module';
import { GestionTerrainPadelModule } from './gestion-terrain-padel/gestion-terrain-padel.module';




@NgModule({
    declarations: [
  ],
    imports: [
        CommonModule, 
        Ng2SmartTableModule,
        AdminRoutingModule,
        SharedModule,
        DashboardModule,
        GestionAdhérentsModule,
        GestionCoachsModule,
        PlanningModule,
        GestionCoursModule,
        GestionPoolModule, 
        GestionSalleModule,
        GestionTerrainFootModule,
        GestionTerrainPadelModule
    ],
    exports: [
    ]
})

export class AdminModule {}
