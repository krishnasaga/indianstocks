// Initializes the `ipos` service on path `/ipos`
const createService = require('feathers-sequelize');
const createModel = require('../../models/ipos.model');
const hooks = require('./ipos.hooks');
const filters = require('./ipos.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'ipos',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ipos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ipos');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
