import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
//import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import {ServicioService} from '../servicio.service'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

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

  NameFormControl= new FormControl('', [
    Validators.required
  ]);

  apellidoFormControl= new FormControl('', [
    Validators.required
  ]);

  dpiFormControl= new FormControl('', [
    Validators.required
  ]);

  fechaFormControl= new FormControl('', [
    Validators.required
  ]);

  edadFormControl= new FormControl('', [
    Validators.required
  ]);

  constructor(private fb: FormBuilder,private servicio:ServicioService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
  
      emailFormControl: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      passFormControl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
      userNameFormControl:['', [Validators.required]],
      NameFormControl:['', [Validators.required]],
      apellidoFormControl:['', [Validators.required]],
      dpiFormControl:['', [Validators.required,Validators.pattern("^[0-9]+")]],
      fechaFormControl:['', [Validators.required]],
      edadFormControl:['', [Validators.required,Validators.pattern("^[0-9]+")]],

    });

  }

  crear(){
    let UserName=this.loginform.controls['userNameFormControl'].value;
    let email=this.loginform.controls['emailFormControl'].value;
    let pass=this.loginform.controls['passFormControl'].value;
    let nombre=this.loginform.controls['NameFormControl'].value;
    let apellido=this.loginform.controls['apellidoFormControl'].value;
    let dpi=this.loginform.controls['dpiFormControl'].value;
    let fecha=this.loginform.controls['fechaFormControl'].value;
    let edad=this.loginform.controls['edadFormControl'].value;
    let mes=fecha._i.month+1;
    let fechaAux=fecha._i.year+'-'+mes+'-'+fecha._i.date;

    const jsonData={username:UserName,nombre:nombre,apellido:apellido,password:pass,correo:email,dpi:dpi,edad:edad,fechaNacimiento:fechaAux,}
    console.log(jsonData);
    this.servicio.postUser(jsonData).subscribe(data=>{
      console.log('la respuesta del api es ',data);
      let aux:any=data;
      if (aux.mensaje=='Usuario registrado correctamente') {
        this.servicio.message(aux.mensaje,'success');
      } else {
        this.servicio.message(aux.mensaje,'error');
      }
    })
  }

}
