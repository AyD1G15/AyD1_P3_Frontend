import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagarComponent } from './pagar/pagar.component';
import { ListadoComponent } from './listado/listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';


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


import { MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    PagarComponent,
    ListadoComponent
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
    MatDatepickerModule,
   MatNativeDateModule ,
   ReactiveFormsModule,
   MatRippleModule,
   FormsModule,
   MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
