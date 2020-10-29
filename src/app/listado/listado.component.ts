
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
 
      
      for(var x = 0; x < 100; x++)
          this.a.push(1);
  }

  a = new Array();
  retorno_objecto(){
     return this.http.get('./../listado/archivo.json');
  }

  elegir(idregalo,idusuario,number,nombre,fechaexp){

    throw new Error('fallo seleccion de regalo')

  }
  show(a){
   console.log(a)
 
 }

  Comprar(regaloid,selecte,name,chargeRate,active,img,cantidad){
    this.  show("cantidad es "+cantidad)
    if(!selecte){this.servicio.message("Debe elegir un tipo de id de regalo","error")
    return 
    }

 this.  show(regaloid+","+JSON.stringify(selecte))
 let idsub=selecte.id
 let total=selecte.total
 if(cantidad>total){this.servicio.message("La cantidad de regalos("+cantidad+") no puede ser mayor que la disponible ("+total+")","error")
return 
}

this.servicio.agregar(regaloid,idsub,cantidad,chargeRate,active,name,img)
this.servicio.message("La tarjeta de regalo fue agregada correctamente","success")
 
// return
 /* this.  show(idsub+","+total)
 this.servicio.seteardata(regaloid,idsub,total,chargeRate,active,name,img);

    this.servicio.navegar('pagar');
 */


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