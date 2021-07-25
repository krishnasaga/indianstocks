const assert = require('assert');
const app = require('../../src/app');

describe('\'ipos\' service', () => {
  it('registered the service', () => {
    const service = app.service('ipos');

    assert.ok(service, 'Registered the service');
  });
});
