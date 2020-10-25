import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
// import {ServicioService} from '../servicio.service';
import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComponent ],
      imports: [
        HttpClientTestingModule,
      

        // MatPaginator, MatSort
      ]
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

  it('se espera que el numero de regalos sea valido', () => {
    expect( function(){ 


      let noregalo="77u"
     
       component.cupones(noregalo); 
      
      } ).toEqual('false');

  });




  it('probar que la respuesta de json es igual al test de muestra', () => {
    // var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); 
    
    expect( function(){ 
    
  
   
       let result=component.retorno_objecto().subscribe(datu=>{


        let a={
          "Regalo1": {
       "name": "Tarjeta 188",
       "id": "500",
       "numero": "50",
       "expiraciondate": "6/09/2019",
       "code": "6.77"
 
         },
          "Regalo2": {
       "name": "Tarjeta 1",
       "id": "500",
       "numero": "50",
       "expiraciondate": "6/09/2019",
       "code": "6.77"
 
         }
     
 }

//  expect(datu).toEqual(a)
 expect(datu.toString()).toEqual(a.toString());

        // expect(datu ).toBeNaN;
        // expect(angular.toJson(datu)).toEqual(a);

        ;}, err=>{
         
           console.log(err); throw "";}); 
        
        // expect(result).toBeTruthy();


      } ).not.toThrow();

  });


/*   it('Parametros mock de lista de regalos respuesta json', () => {
    expect( function(){ 


      this.HttpClientTestingModule.get('./../listado/archivo.json').subscribe(data=>{
        // expect(testPost).toBe(data,'debe mosstrer mocked data');
        console.log('las preguntas son->',data);
        console.log('las preguntas2 son->',JSON.stringify(data));

      }) 

    });
  }); */

       /* this.http.get(this.servicio.get_domain()+'/preguntas').subscribe(data=>{
        console.log('data es'+data);
    
        var dat:any=data
        this.preguntas=data;
        dat.forEach(element => {
    
          if(element.titulo!=null){
           var title:string=element.titulo
           if(title.length>0){
              this.dataSource.push(this.createnewrow(element));  //add the new model object to the dataSource
    
           }
          }
    
    
    
        });

        



      } ).toThrow(new Error("fallo seleccion de regalo")); */

  







    

});
