import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  
  constructor(private router:Router,private http: HttpClient) { }

  getDataget(name){
    return this.http.get(this.get_domain()+'/'+name)
  }
  get_domain() { 

    //return "https://learn-287403.uc.r.appspot.com"
    return "http://localhost:3000"

    
  }

  postUser(form){
    return this.http.post(this.get_domain()+'/registro',form)
}

postLogin(form){
  return this.http.post(this.get_domain()+'/login',form)
}
  message(a,type) { 

    Swal.fire({
      title: 'Mensaje!',
      text: a,
      icon:type,
      confirmButtonText: 'Cool'
    })
  }

  navegar(urlnav){
 
    // this.router.navigate(['ver-pregunta',id]);
    // this.router.navigate(['/listado']); 
      this.router.navigate(['/'+urlnav]);

  }
}

