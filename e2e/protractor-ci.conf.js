
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
        'chromeOptions': {
            'args': [
                '--no-sandbox',
                '--headless',
                '--disable-gpu',
                '--window-size=800,600'
            ]
        }
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    cucumberOpts: {
        require: ['./src/steps/**/*.steps.ts'],
      },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
        // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};