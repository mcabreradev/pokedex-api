const assert = require('assert');
const app = require('../../src/app');

describe('\'pokemons\' service', () => {
  it('registered the service', () => {
    const service = app.service('pokemons');

    assert.ok(service, 'Registered the service');
  });
});
