import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ServicioService } from './servicio.service';

describe('ServiciosService', () => {
  beforeEach(async(() =>{TestBed.configureTestingModule({

    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],     
    providers: [
      RouterTestingModule
    
   ]
     })  }));



    it('should be created', () => {
      const service: ServicioService = TestBed.get(ServicioService);
      expect(service).toBeTruthy();
    });
  });




