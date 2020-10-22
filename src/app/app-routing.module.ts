import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListadoComponent} from '../app/listado/listado.component';
import { PagarComponent } from '../app/pagar/pagar.component';

const routes: Routes = [

  {path: 'listado', component: ListadoComponent},
  {path: '', component: ListadoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
