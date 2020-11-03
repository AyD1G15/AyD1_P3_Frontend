// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  allScriptsTimeout: 11000,
  specs: [
    './src/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    "chromeOptions": {
      "args": [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--window-size=800,600'
      ],
      binary: "C:/Program Files/Google/Chrome/Application/chrome.exe"
    },
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  cucumberOpts: {
    require: ['./src/steps/**/*.steps.ts'],
  },
  /*jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },*/
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    /*jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));*/
  }
};