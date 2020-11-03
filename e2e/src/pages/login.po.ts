import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getPasswordText() {
    return element(by.id('app-login passFormControl')).sendKeys('fsasdfsdfd') as Promise<any>;
  }
}