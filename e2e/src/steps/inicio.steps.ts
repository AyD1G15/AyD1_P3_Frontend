//import {__awaiter} from 'tslib'
import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { InicioPage } from '../pages/inicio.po';

let page: InicioPage;

Before(() => {
  page = new InicioPage();
});

Given(/^Estoy en cualquier pagina$/, async () => {
  await page.navigateTo();
});

When(/^no estoy haciendo nada$/, () => {});

Then(/^deberia ver el titulo$/, async () => {
  expect(await page.gettitleText()).to.equal('Sistema');
  //expect('fasd23ddadda').not.equal('');
});

