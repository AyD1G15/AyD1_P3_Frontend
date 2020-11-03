import { browser, by, element } from 'protractor';

export class InicioPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  gettitleText() {
    return element(by.id('app-new-component titulo')).getText() as Promise<string>;
  }
}