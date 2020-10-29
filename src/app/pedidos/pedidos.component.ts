import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';
// import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(private servicio:ServicioService
    // ,private titleService:Title
    ) {

    // this.titleService.setTitle("Mis tarjetas");

   }
  regalos;
  datauser:any
  iduser=""
  Enviar(regalo){
   
 /*    this.username=element.correo
   this.name=element.name
   this.imagen=element.image
  
 */
  }
  ngOnInit(): void {
    this.datauser=this.servicio.get_userid()
    console.log("data77 es---"); 
    console.log(this.datauser);    
    console.log("---"); 
    
    console.log(JSON.stringify(this.datauser));    
    console.log("******"); 
    
    // if(this.data)this.data=JSON.stringify(this.data)
    //  this.data=this.data.json()
    
    if(this.datauser){
     this.datauser.forEach(element => {
       this.iduser=element.id
    /*    this.username=element.correo
      this.name=element.name
      this.imagen=element.image
     
    */
     }); 
      }

      this.iduser="5f950dc9191d602c64f42b27"

    this.servicio.gethistory(this.iduser).subscribe(data=>{
      console.log('data es'+data);
      console.log('data2 es'+JSON.stringify(data));

      var dat:any=data
      this.regalos=data;
    




      });
 
  }

}
