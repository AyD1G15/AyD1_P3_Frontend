import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  fillerContent = Array.from({length: 50}, () =>
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

private _mobileQueryListener: () => void;
  constructor(private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  mobileQuery: MediaQueryList;


  fillerNav=[
    {name:"Login",route:"login",icon:"login"},
    {name:"Tarjetas",route:"listado",icon:"dns"},
    {name:"Carro",route:"carro",icon:"shopping_cart"},
    {name:"Pagar",route:"pagar",icon:"request_quote"},    
    {name:"Registro",route:"registro",icon:"face"},
    {name:"Salir",route:"login",icon:"account_circle"},
  ]
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    
  }

  shouldRun = true;//[/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
