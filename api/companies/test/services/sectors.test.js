const assert = require('assert');
const app = require('../../src/app');

describe('\'sectors\' service', () => {
  it('registered the service', () => {
    const service = app.service('sectors');

    assert.ok(service, 'Registered the service');
  });
});
