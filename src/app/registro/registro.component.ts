import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

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

}
