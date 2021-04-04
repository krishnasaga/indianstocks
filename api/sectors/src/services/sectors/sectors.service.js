// Initializes the `sectors` service on path `/sectors`
const { Sectors } = require('./sectors.class');
const createModel = require('../../models/sectors.model');
const hooks = require('./sectors.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sectors', new Sectors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sectors');

  service.hooks(hooks);
};
