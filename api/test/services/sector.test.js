const app = require('../../src/app');

describe('\'sector\' service', () => {
  it('registered the service', () => {
    const service = app.service('sector');
    expect(service).toBeTruthy();
  });
});
