import { browser, by, element } from 'protractor';

export class TransaccionPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getPasswordText() {
    return element(by.id('app-inventory error')).getText() as Promise<string>;
  }
}