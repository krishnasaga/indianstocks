const app = require('../../src/app');

describe('\'people\' service', () => {
  it('registered the service', () => {
    const service = app.service('people');
    expect(service).toBeTruthy();
  });
});
