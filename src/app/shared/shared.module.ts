
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { LoginComponent } from './inputs/login/login.component';
import { PassComponent } from './inputs/pass/pass.component';
import { RoundBordersComponent } from './round-borders/round-borders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { StackAdherentComponent } from './charts/stack-adherent/stack-adherent.component';
import { PieSexeComponent } from './charts/pie-sexe/pie-sexe.component';
import { PieBarComponent } from './charts/pie-bar/pie-bar.component';

@NgModule({
  declarations: [

    DialogMessageComponent,
    DialogErrorComponent,
    LoginComponent,
    PassComponent,
    RoundBordersComponent,
    NavBarComponent,
    SideMenuComponent,
    PieChartComponent,
    StackAdherentComponent,
    PieSexeComponent,
    PieBarComponent
    
  ],
  imports: [
    CommonModule, 
    MaterialModule,
    Ng2SmartTableModule,
  ],
  exports: [
    
    DialogMessageComponent,
    DialogErrorComponent,
    LoginComponent,
    PassComponent,
    RoundBordersComponent,
    NavBarComponent,
    SideMenuComponent,
    PieChartComponent,
    StackAdherentComponent,
    PieSexeComponent
  ]
})

export class SharedModule {}

