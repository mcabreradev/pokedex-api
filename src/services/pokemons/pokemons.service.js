// Initializes the `pokemons` service on path `/pokemons`
const createService = require('feathers-mongodb');
const hooks = require('./pokemons.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/pokemons', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pokemons');

  mongoClient.then(db => {
    service.Model = db.collection('pokemons');
  });

  service.hooks(hooks);
};
