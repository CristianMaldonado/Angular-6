import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { ElementContainerComponent } from './element-container/element-container.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from "primeng/autocomplete";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DinamicComponentsModule } from './dinamic-components/dinamic-components.module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CountryService } from './auto-complete/country.service';
import { FormArrayPadreComponent } from './form-array-padre/form-array-padre.component';
import { FormArrayHijoComponent } from './form-array-hijo/form-array-hijo.component';
import { CorteDeControlComponent } from './corte-de-control/corte-de-control.component';
import { EmulacionService } from './corte-de-control/emulacion.service';
import { DropFileUploadComponent } from './drop-file-upload/drop-file-upload.component';

import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    ElementContainerComponent,
    ButtonsComponent,
    AutoCompleteComponent,
    FormArrayPadreComponent,
    FormArrayHijoComponent,
    CorteDeControlComponent,
    DropFileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    DinamicComponentsModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [CountryService, EmulacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
