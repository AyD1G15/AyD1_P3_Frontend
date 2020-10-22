import { Component, OnInit } from '@angular/core';
// import { System } from 'system';
import {HttpClient} from "@angular/common/http";
// import { PagarComponent } from './../pagar/pagar.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  retorno_objecto(){
    return this.http.get('./../listado/archivo.json');

  }

  elegir(idregalo,idusuario,number,nombre,fechaexp){

    throw new Error('fallo seleccion de regalo')

  }



}
