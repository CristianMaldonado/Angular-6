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
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CountryService } from './auto-complete/country.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    ElementContainerComponent,
    ButtonsComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    DinamicComponentsModule,
    AutoCompleteModule,
    FormsModule,
    HttpModule    
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
