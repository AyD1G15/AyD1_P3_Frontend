

import { Component, OnInit } from '@angular/core';
// import { System } from 'system';
import {HttpClient} from "@angular/common/http";
// import { PagarComponent } from './../pagar/pagar.component';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  regalos;

  constructor(private http: HttpClient,private servicio:ServicioService) { }

  ngOnInit(): void {
    
    this.servicio.getDataget('catalog').subscribe(data=>{
      console.log('data es'+data);
      console.log('data2 es'+JSON.stringify(data));

      var dat:any=data
      this.regalos=data;
    



      });
 

  }

  
  retorno_objecto(){
     return this.http.get('./../listado/archivo.json');

  }

  elegir(idregalo,idusuario,number,nombre,fechaexp){

    throw new Error('fallo seleccion de regalo')

  }


  Comprar(regaloid){

   // this.servicio.message("el id es "+regaloid,"success")

    this.servicio.navegar('pagar');

  }



}