import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ServicioService } from './servicio.service';


beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ ServicioService ],
    imports: [
      RouterTestingModule,
    

      // MatPaginator, MatSort
    ],
  
    providers: [ 
      ServicioService 

    ]
  })
  .compileComponents();
});
describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(() => {
   
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
