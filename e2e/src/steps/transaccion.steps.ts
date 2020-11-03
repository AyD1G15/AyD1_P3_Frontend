//import {__awaiter} from 'tslib'
import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { InicioPage } from '../pages/inicio.po';

let page: InicioPage;

Before(() => {
  page = new InicioPage();
});

Given(/^Ingreso a la pagina de transacciones$/, async () => {
  await page.navigateTo();
});

When(/^entro sin ser administrador$/, () => {});

Then(/^deberia mostrar error$/, async () => {
  expect(await page.gettitleText()).to.equal('SE NECESITA SER ADMINISTRADOR PARA VER HISTORIAL DE TRANSACCIONES DE TODOS LOS USUARIOS  ');
  
});

