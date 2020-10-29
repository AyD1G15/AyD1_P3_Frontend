import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service'

@Component({
  selector: 'app-menuhead',
  templateUrl: './menuhead.component.html',
  styleUrls: ['./menuhead.component.scss']
})
export class MenuheadComponent implements OnInit {

  constructor(private servicio:ServicioService) { }
  obj:any
  ngOnInit(): void {
   this. obj=this.servicio.accounts

   this. obj.forEach(element => {
    this.show("element es "+element)
    this.show("element es "+JSON.stringify(element))

  });
  }

  eliminar(idregalo){
  this.show("id es "+idregalo)
let j=0
    this. obj.forEach(element => {
      this.show("element.idregalo es "+element.idregalo)

       if(element.idregalo==idregalo)this.obj.splice(1,j)
       
  j++
    });
  }
  show(a){
    console.log(a)

  
  }

  Procesar(){

    this.servicio.navegar('pagar');

  }
}
