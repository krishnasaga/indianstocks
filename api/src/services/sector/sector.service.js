// Initializes the `sector` service on path `/sector`
const { Sector } = require('./sector.class');
const createModel = require('../../models/sector.model');
const hooks = require('./sector.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sector', new Sector(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sector');

  service.hooks(hooks);
};
