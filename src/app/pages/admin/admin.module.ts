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

import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';



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
        PlanningModule
    ],
    exports: [
    ]
})

export class AdminModule {}
