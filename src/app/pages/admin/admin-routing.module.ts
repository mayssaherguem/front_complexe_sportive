import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GestionAdhérentsComponent } from "./gestion-adhérents/gestion-adhérents.component";
import { GestionCoachsComponent } from "./gestion-coachs/gestion-coachs.component";
import { PlanningComponent } from "./planning/planning.component";
import { GestionTerrainFootComponent } from "./gestion-terrain-foot/gestion-terrain-foot.component";
import { GestionTerrainPadelComponent } from "./gestion-terrain-padel/gestion-terrain-padel.component";
import { GestionSalleComponent } from "./gestion-salle/gestion-salle.component";
import { GestionCoursComponent } from "./gestion-cours/gestion-cours.component";

const routes: Routes = [
    {
        path: "admin",  
        children : [

            { path: 'dashboard', component: DashboardComponent },  
            { path: 'gestion_adherent', component: GestionAdhérentsComponent },  
            { path: 'gestion_coach', component: GestionCoachsComponent },  
            { path: 'planning', component: PlanningComponent },  
            { path: 'terrain_foot', component: GestionTerrainFootComponent },  
            { path: 'terrain_padel', component: GestionTerrainPadelComponent },  
            { path: 'salle', component: GestionSalleComponent },  
            { path: 'cours', component: GestionCoursComponent },  

              
        ]
    }]
@NgModule({
    imports:
    
    [RouterModule.forChild(routes)],
    
    
    exports: [RouterModule]
})



export class AdminRoutingModule { }