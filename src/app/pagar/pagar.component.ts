import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
 
angForm: FormGroup;
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss']
})
export class PagarComponent implements OnInit {
  angForm: FormGroup;

  constructor( private route: ActivatedRoute,private fb:FormBuilder) { 


  }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
  this. setdata()
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
  startDate = new Date(1990, 0, 1);

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

  }

  Comprar() {
   console.log("notarjeta es "+this.notarjeta);
   console.log("codigov es "+this.codigov);
   console.log("namcliente es "+this.namcliente);
   console.log("total es "+this.total);
   console.log("notarjeta es "+this.notarjeta);
   console.log("startDate es "+this.startDate);
/*    
   console.log("total es "+this.total);
   console.log("notarjeta es "+this.notarjeta); */
  }


  pagar(notarjeta,Nombretarjeta,Fechaexpiración,Codigoverificador,Montoapagar,Moneda){

    throw new Error('fallo pago')

  }
}
interface Cards {
  value: string;
  viewValue: string;
}