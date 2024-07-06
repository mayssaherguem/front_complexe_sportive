import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from 'src/environments/environment';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { AdminModule } from './pages/admin/admin.module';

const routes: Routes = [

  { path: '', component: AuthentificationComponent },  
  {
    path: '',
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule) 
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModule,
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
