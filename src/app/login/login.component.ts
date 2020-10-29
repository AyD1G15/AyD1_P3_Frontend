import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ServicioService} from '../servicio.service'

import {ErrorStateMatcher} from '@angular/material/core';
//import Swal from 'sweetalert2'
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
  ]);
  passFormControl = new FormControl('', [
    Validators.required
  ]);

  userNameFormControl= new FormControl('', [
    Validators.required
  ]);

  constructor(private fb: FormBuilder,private servicio:ServicioService,private router:Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
  
      emailFormControl: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      passFormControl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
      //userNameFormControl:['', [Validators.required]],


    });
  }

  ingresar(){
    //let UserName=this.loginform.controls['userNameFormControl'].value;
    let email=this.loginform.controls['emailFormControl'].value;
    let pass=this.loginform.controls['passFormControl'].value;


    const jsonData={correo:email,password:pass}
    console.log(jsonData);
   
      this.servicio.postLogin(jsonData).subscribe(data=>{
        console.log('la api me respondio ',data);
        this.servicio.setearparametros(data)
        this.router.navigate(['/listado']);
      },err=>{
        this.servicio.message('credenciales incorrectas','error');
      })
  

  }

}
