exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000',
  suites: {
    all: [
      './e2e/initial-content.spec.js',
      './e2e/add-item.spec.js'
    ]
  },
  suite: 'all',
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function onPrepare() {
    require('babel-core/register');

    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'none',
      prefixes: {
        success: '+ ',
        failure: 'x ',
        pending: '* '
      }
    }));

    browser.manage().window().setSize(1280, 1024);
    console.log('We are going to use the following baseUrl during the tests:', browser.baseUrl); // eslint-disable-line no-console
  }
};
