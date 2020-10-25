
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
  regalos:any;
  mydata:Element ;
  dataSource: any[] = [];
  cantidad="1"
  active1=""
  card1=""
  constructor(private http: HttpClient,private servicio:ServicioService) { }

  ngOnInit(): void {
    
    this.servicio.getDataget('catalog').subscribe(data=>{
      console.log('data es'+data);
      console.log('data2 es'+JSON.stringify(data));

      var dat:any=data
      this.regalos=data;
    this.show("JSON ES")
    this.show(JSON.stringify(data))
    this.show("ob.active1 es ")

      if(data!=null){

         let ob:any=data[0];
        this.show("ob.active es "+ob.active)
        this.active1=ob.active
       if(this.regalos[0].availability!=null){
          this.show("avaliabily")

          this.dataSource = [];

          this.regalos[0].availability.forEach(element => {
            this.show("id es "+element.id)

            this.dataSource.push(this.createnewrow(element.id,element.total));
           });
         }else this.show("es nulo availabiliy")
      }


      });
 

  }
show(a){
  console.log(a)

}
  
  retorno_objecto(){
     return this.http.get('./../listado/archivo.json');

  }

  elegir(idregalo,idusuario,number,nombre,fechaexp){

    throw new Error('fallo seleccion de regalo')

  }
  cupones(numeros){

    if ( !isNaN(numeros) ) {
      return "true"

    }else return "false"

  }

  Comprar(regaloid){
   this.show("cantidad es "+ this.cantidad)
   this.show("regaloid es "+ regaloid)
   this.show("card1 es "+ this.card1)
   // this.servicio.message("el id es "+regaloid,"success")

     this.servicio.navegar('pagar');

  }


  createnewrow(id,existencia){

   
    const dat:Element={

      id,
      existencia
      
     }

     return dat
     
     
   }




}



export interface Element {
  id: string;
  existencia: string;
  
  
}