import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PagarComponent } from './pagar/pagar.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path:'listado',component:ListadoComponent},
  {path:'pagar',component:PagarComponent},
  {path:'registro',component:RegistroComponent},
  {path:'',component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
