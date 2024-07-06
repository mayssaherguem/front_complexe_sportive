import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GestionAdhérentsComponent } from "./gestion-adhérents/gestion-adhérents.component";
import { GestionCoachsComponent } from "./gestion-coachs/gestion-coachs.component";
import { PlanningComponent } from "./planning/planning.component";

const routes: Routes = [
    {
        path: "admin",  
        children : [

            { path: 'dashboard', component: DashboardComponent },  
            { path: 'gestion_adherent', component: GestionAdhérentsComponent },  
            { path: 'gestion_coach', component: GestionCoachsComponent },  
            { path: 'planning', component: PlanningComponent },  

              
        ]
    }]
@NgModule({
    imports:
    
    [RouterModule.forChild(routes)],
    
    
    exports: [RouterModule]
})



export class AdminRoutingModule { }