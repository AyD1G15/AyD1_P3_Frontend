import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatListModule} from '@angular/material/list'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
    
  ]
})
export class MaterialModule { }
