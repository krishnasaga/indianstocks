const app = require('../../src/app');

describe('\'sectors\' service', () => {
  it('registered the service', () => {
    const service = app.service('sectors');
    expect(service).toBeTruthy();
  });
});
