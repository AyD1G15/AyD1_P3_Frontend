import { Component } from '@angular/core';
import {ServicioService} from '././servicio.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prac3';
  constructor(
    // private router:Router,
    private servicio:ServicioService) { }


  editar(){ 
    // this.router.navigate(['ver-pregunta',id]);
     this.servicio.navegar('listado');
    //  this.router.navigate(['/listado']);

    }
}
