// Initializes the `sectors` service on path `/sectors`
const createService = require('feathers-sequelize');
const createModel = require('../../models/sectors.model');
const hooks = require('./sectors.hooks');
const filters = require('./sectors.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'sectors',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sectors', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sectors');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
