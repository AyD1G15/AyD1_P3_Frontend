import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';

import { PagarComponent } from './pagar.component';
import { DatePipe } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('PagarComponent', () => {
  let component: PagarComponent;
  let fixture: ComponentFixture<PagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],     
      providers: [
        DatePipe,
        FormBuilder,
        NgForm
        
        
      
     ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('verificar los campos de pago no sean vacios', () => {
    expect( function(){ */

/* 
      ódulo en donde el usuario ingresará los siguientes campos:
● Número de tarjeta de crédito (Integer de 16 caracteres)
● Nombre en la tarjeta (String)
● Fecha de expiración (MM/YY)
● Codigo verificador (Integer de 3 caracteres)
● Monto a pagar *Obtenido de la selección de compra del usuario
● Moneda con la cual se va a pagar *Se debe utilizar la api para obtener el cambio de
la moneda
 */
/*

      let notarjeta=""//numero de tarjeta 16 caracteres
      let Nombretarjeta=""
      let Fechaexpiración=""
      let Codigoverificador=""
      let Montoapagar=""
      let Moneda=""

       component.pagar(notarjeta,Nombretarjeta,Fechaexpiración,Codigoverificador,Montoapagar,Moneda); 
      
      } ).toThrow(new Error("fallo pago"));

  });

  it('la fecha de expiracion es menor al año en curso', () => {
    expect( function(){ 


      let notarjeta="1111122222333334"//numero de tarjeta 16 caracteres
      let Nombretarjeta="visa"
      let Fechaexpiración="01/01/2011"
      let Codigoverificador="44"
      let Montoapagar="333"
      let Moneda="USD"

       component.pagar(notarjeta,Nombretarjeta,Fechaexpiración,Codigoverificador,Montoapagar,Moneda); 
      
      } ).toThrow(new Error("fallo pago"));

  });



  it('Parametros invalidos o nulos', () => {
    expect( function(){ 


      let notarjeta=null//numero de tarjeta 16 caracteres
      let Nombretarjeta=null
      let Fechaexpiración=null
      let Codigoverificador=null
      let Montoapagar=null
      let Moneda=null

       component.pagar(notarjeta,Nombretarjeta,Fechaexpiración,Codigoverificador,Montoapagar,Moneda); 
      
      } ).toThrow(new Error("fallo pago"));

  });
*/


});
