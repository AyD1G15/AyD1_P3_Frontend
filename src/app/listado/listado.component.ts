
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
  show(a){
   console.log(a)
 
 }

  Comprar(regaloid,selecte,name,chargeRate,active,img){
 this.  show(regaloid+","+JSON.stringify(selecte))
 let idsub=selecte.id
 let total=selecte.total

 this.  show(idsub+","+total)
 this.servicio.seteardata(regaloid,idsub,total,chargeRate,active,name,img);
   // this.servicio.message("el id es "+regaloid,"success")
  /*  
   seteardata(regaloid,idsub,total,changerate,active,name)  */
    this.servicio.navegar('pagar');



/*     if(this.regalos[regaloid]){
 

    if(this.regalos[regaloid].availability!=null){
   
   
      this.regalos[regaloid].availability.forEach(element => {
        this.show("element es "+JSON.stringify(element))
        
        this.show("id es "+element.id)
         if(selecte==element.id){
          this.show("es total es "+element.total)
        }

       });
     }

    } */

  }



}