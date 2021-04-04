const app = require('../../src/app');

describe('\'metrics\' service', () => {
  it('registered the service', () => {
    const service = app.service('metrics');
    expect(service).toBeTruthy();
  });
});
