import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from 'src/environments/environment';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionAdhérentsComponent } from './pages/gestion-adhérents/gestion-adhérents.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { GestionCoachsComponent } from './pages/gestion-coachs/gestion-coachs.component';
import { PlanningComponent } from './pages/planning/planning.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },  
  { path: 'gestion_adherent', component: GestionAdhérentsComponent },  
  { path: 'gestion_coach', component: GestionCoachsComponent },  
  { path: 'planning', component: PlanningComponent },  
  { path: '', component: AuthentificationComponent },  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
