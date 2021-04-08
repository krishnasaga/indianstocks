const app = require('../../src/app');

describe('\'company\' service', () => {
  it('registered the service', () => {
    const service = app.service('company');
    expect(service).toBeTruthy();
  });
});
