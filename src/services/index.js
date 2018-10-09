const pokemons = require('./pokemons/pokemons.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pokemons);
};
