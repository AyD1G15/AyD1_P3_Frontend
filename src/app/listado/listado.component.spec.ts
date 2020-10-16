import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Parametros invalidos o nulos', () => {
    expect( function(){ 


      let idregalo=null
      let idusuario=null
      let number=null
      let nombre=null
      let fechaexp=null

       component.elegir(idregalo,idusuario,number,nombre,fechaexp); 
      
      } ).toThrow(new Error("fallo seleccion de regalo"));

  });



  it('Parametros de fecha no en formato fecha', () => {
    expect( function(){ 


      let idregalo="1"
      let idusuario="1"
      let number="1-0000"
      let nombre="tarjeta de Regalo 1"
      let fechaexp="xxx"

       component.elegir(idregalo,idusuario,number,nombre,fechaexp); 
      
      } ).toThrow(new Error("fallo seleccion de regalo"));

  });


  it('Parametros de llave primaria vacios', () => {
    expect( function(){ 


      let idregalo=""
      let idusuario=""
      let number="1-0000"
      let nombre="tarjeta de Regalo 1"
      let fechaexp="01/01/2011"

       component.elegir(idregalo,idusuario,number,nombre,fechaexp); 
      
      } ).toThrow(new Error("fallo seleccion de regalo"));

  });



});
