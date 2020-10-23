import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { PagarComponent } from './pagar/pagar.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'listado',component:ListadoComponent},
  {path:'pagar',component:PagarComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
