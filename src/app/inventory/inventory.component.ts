import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})


export class InventoryComponent implements OnInit {

  transacciones;
  datauser:any
  iduser=""
  constructor(private servicio:ServicioService) {
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
      // this.iduser="5f950dc9191d602c64f42b27"

    this.servicio.getinventory(this.iduser).subscribe(data=>{
      console.log('data es'+data);
      console.log('data2 es'+JSON.stringify(data));

      var dat:any=data
      this.transacciones=data;
    




      });

   }

  ngOnInit(): void {
  }

}
