import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagarComponent } from './pagar/pagar.component';
import { ListadoComponent } from './listado/listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common'


import {MatInputModule} from '@angular/material/input';
import { MatCardModule} from "@angular/material/Card";
import {MatDatepickerModule} from '@angular/material/datepicker';
/* import {MatNativeDateModule} from '@angular/material/nativeDateModule';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
 */
import { MatNativeDateModule } from '@angular/material/core';

import { MatListModule} from "@angular/material/List";
import { MatButtonModule} from "@angular/material/Button";
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { RegistroComponent } from './registro/registro.component';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {NumberPickerModule} from 'ng-number-picker';

/* import { 
  MatTooltipModule,
  MatToolbarModule
} from '@angular/material';
 */
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

import { LoginComponent } from './login/login.component';

import { MaterialModule } from './material.module ';

import { MatRippleModule} from '@angular/material/core';
import { MenuheadComponent } from './menuhead/menuhead.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { PedidosComponent } from './pedidos/pedidos.component';
// import {MatGridListModule} from '@angular/material/grid-list'


@NgModule({
  declarations: [
    AppComponent,
    PagarComponent,
    ListadoComponent,
    RegistroComponent,
    LoginComponent,
    MenuheadComponent,
    NewComponentComponent,
    PedidosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
MatToolbarModule,
    MatDatepickerModule,
   MatNativeDateModule ,
   ReactiveFormsModule,
   MatRippleModule,
   FormsModule,
   MatSelectModule,
    MaterialModule,
    HttpClientModule,
    NumberPickerModule

  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DateFormats },
    MaterialModule,
    HttpClientModule,
    DatePipe
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
