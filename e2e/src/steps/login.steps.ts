//import {__awaiter} from 'tslib'
import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/login.po';

let page: LoginPage;

Before(() => {
  page = new LoginPage();
});

Given(/^Ingresar contraseña$/, async () => {
  await page.navigateTo();
});

When(/^Ingreso una contraseña valida$/, () => {});

Then(/^no deberia mostrar error$/, async () => {
  expect(await page.getPasswordText()).to.equal('');
  //expect('fasd23ddadda').not.equal('');
});

