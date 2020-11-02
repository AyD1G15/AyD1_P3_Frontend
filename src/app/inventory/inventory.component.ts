import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})


export class InventoryComponent implements OnInit {

  transacciones;
  transaccionesadmin
  datauser:any
  iduser=""
  esadmin:boolean=false
  admonmsn=""
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
       this.esadmin=element.esadmin
       console.log("esadmin es "+this.esadmin); 


    /*    this.username=element.correo
      this.name=element.name
      this.imagen=element.image
     
    */
     }); 
      }
      //  this.iduser="5f950dc9191d602c64f42b27"
      // this.esadmin=true 

    // /*  */  this.iduser="5f950dc9191d602c64f42b27"
      if(this.esadmin){
        this.servicio.getinventoryad(this.iduser).subscribe(data=>{
          console.log('data es'+data);
    
          var dat:any=data
          this.transacciones=null;
          this.transaccionesadmin=data;

          console.log('transaccionesadmin es'+JSON.stringify(this.transaccionesadmin));

          let cards =  {value: '1', viewValue: 'Visa'}
          console.log('cards es'+JSON.stringify(cards));
          console.log('cards es'+cards.value);

          let cards1 =  [{"_id":"5f9a79e42150eb4224407fc2"
          ,"status":true,"userId":{"_id":"5f950dc9191d602c64f42b27","username":"FernandoWeb","nombre":"Fernando"
          ,"apellido":"Morales"}}];
          
let av=cards1[0];
console.log('cards1 es'+JSON.stringify(cards1));
          console.log('cards-id es'+av._id);
          console.log('cards-userId es'+av.userId.apellido);

          });

      }else{
  this.admonmsn="SE NECESITA SER ADMINISTRADOR PARA VER HISTORIAL DE TRANSACCIONES DE TODOS LOS USUARIOS  "
    /*     this.servicio.getinventory(this.iduser).subscribe(data=>{
          console.log('data es'+data);
          console.log('data2 es'+JSON.stringify(data));
    
          var dat:any=data
          this.transacciones=data;
        
         
    
    
          }); */
      }
     



    

   }

  ngOnInit(): void {
  }

}
