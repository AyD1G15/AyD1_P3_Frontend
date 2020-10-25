import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagarComponent } from './pagar/pagar.component';
import { ListadoComponent } from './listado/listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatInputModule} from '@angular/material/input';
import { RegistroComponent } from './registro/registro.component';
import { MaterialModule } from './material.module';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import {HttpClientModule} from '@angular/common/http';

export const DateFormats = {
  parse: {
      dateInput: ['YYYY-MM-DD']
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    AppComponent,
    PagarComponent,
    ListadoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DateFormats }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
