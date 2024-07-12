import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { pagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BSMenuService } from './services/BSMenu.service';
import { IconComponent } from './pages/icon/icon.component';
import { SharedModule } from './shared/shared.module';
import { DialogMessageService } from './services/dialog-message.service';
import { DialogErrorService } from './services/dialog-error.service';
import { CommonModule } from '@angular/common';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { GetFromBackendService } from './services/getFromBackend.service';
import { environment } from 'src/environments/environment';
import { ConfigurationHelper } from './services/ConfigurationHelper';
export function initConfig(configService: ConfigurationHelper) {
  return () => configService.load(environment, 'assets/config/config.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    pagesModule,
    HttpClientModule,
    
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule ,
    MatSelectModule,
    MatFormFieldModule,
    SharedModule,
    TreeViewModule,
    DropDownListAllModule, 
    MultiSelectAllModule,
    DropDownButtonAllModule,
    MaskedTextBoxModule, 
    UploaderAllModule,
    ToolbarAllModule, 
    ContextMenuAllModule,
    ButtonAllModule, 
    CheckBoxAllModule, 
    SwitchAllModule,
    DatePickerAllModule, 
    TimePickerAllModule, 
    DateTimePickerAllModule,
    NumericTextBoxAllModule, 
    TextBoxAllModule,
    ScheduleAllModule, 
    RecurrenceEditorAllModule
  ],
  providers: [
    BSMenuService,
    DialogMessageService,
    DialogErrorService,
    GetFromBackendService,
    {provide: APP_INITIALIZER, useFactory: initConfig, deps: [ConfigurationHelper], multi: true },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
