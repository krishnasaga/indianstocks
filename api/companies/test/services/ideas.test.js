const assert = require('assert');
const app = require('../../src/app');

describe('\'ideas\' service', () => {
  it('registered the service', () => {
    const service = app.service('ideas');

    assert.ok(service, 'Registered the service');
  });
});
