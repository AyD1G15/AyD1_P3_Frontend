import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import {ServicioService} from '../servicio.service';
import { DatePipe } from '@angular/common'

angForm: FormGroup;
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss']
})
export class PagarComponent implements OnInit {
  angForm: FormGroup;

  constructor( private datePipe: DatePipe,private route: ActivatedRoute,private servicio:ServicioService,private fb:FormBuilder) { 


  }
  tasa
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
  this. setdata()


  this.servicio.getDataget('TasaCambio').subscribe(data=>{
    console.log('tasas es'+data);
    console.log('tasas es'+JSON.stringify(data));

    var dat:any=data
    this.tasa=data;
  



    });


  }

  nombre:string=""
  imagen:string="https://media.karousell.com/media/photos/products/2020/5/21/rm50_goggle_play_gift_card_mal_1590040469_c1100b5a_progressive.jpg"
  status:string=""
  id:string=""
  notarjeta:string=""
  charge:string=""
  codigov:string=""
  namcliente:string=""
  total:string=""
  datePipeString:string=""
  startDate = new Date(1990, 0, 1);
  moneda:string=""
  card1:string=""

  // Nombretarjeta:string=""
  cards: Cards[] = [
    {value: '1', viewValue: 'Visa'},
    {value: '2', viewValue: 'Master Card'},
    {value: '3', viewValue: 'Dinner club'}
  ];
  setdata(){
    this.nombre="regalo 1"

    this.imagen="https://media.karousell.com/media/photos/products/2020/5/21/rm50_goggle_play_gift_card_mal_1590040469_c1100b5a_progressive.jpg"
    this.status="Active"
    this.id="1"
    this.notarjeta="6-7"
    this.charge="6-7"
    this.codigov=""
    this.namcliente=""
    this.total="455";
    this.moneda="Q";

  }

  Comprar() {
   console.log("notarjeta es "+this.notarjeta);
   console.log("codigov es "+this.codigov);
   console.log("namcliente es "+this.namcliente);
   console.log("total es "+this.total);
   console.log("notarjeta es "+this.notarjeta);
   console.log("startDate es "+this.startDate);
  //  let latest_date =this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
   this.datePipeString = this.datePipe.transform(this.startDate,'yyyy-MM-dd');


   let username=this.namcliente;
   let numeroTarjeta=this.notarjeta;
   let nombreTarjeta=this.card1;
   let monto=this.total;
   let codigoVerificacion=this.codigov;
   let fechaExpira=this.datePipeString;
   let moneda=this.moneda;


   this.show("1001")
   const jsonData={username:username,numeroTarjeta:numeroTarjeta,nombreTarjeta:nombreTarjeta,
    monto:monto,codigoVerificacion:codigoVerificacion,fechaExpira:fechaExpira,moneda:moneda}
  
     this.pagarjson(jsonData)
 }
 show(a){
  console.log(a)

}
  
 pagarjson(jsonData){
  this.show("1002")
  // ,"pago"
  console.log(jsonData);
  this.servicio.postPago(jsonData).subscribe(data=>{
    console.log('la respuesta del api es ',data);
    let aux:any=data;
    if (aux.mensaje=='Pago registrado correctamente') {
      this.servicio.message(aux.mensaje,'success');
     //  this.router.navigate(['/login']);
    } else {
      this.servicio.message(aux.mensaje,'error');
    }
  })
 }
/*    
   console.log("total es "+this.total);
   console.log("notarjeta es "+this.notarjeta); */
  


  pagar(notarjeta,Nombretarjeta,Fechaexpiración,Codigoverificador,Montoapagar,Moneda){

    throw new Error('fallo pago')

  }
}
interface Cards {
  value: string;
  viewValue: string;
}