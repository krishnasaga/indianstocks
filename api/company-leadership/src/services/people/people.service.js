// Initializes the `people` service on path `/people`
const { People } = require('./people.class');
const createModel = require('../../models/people.model');
const hooks = require('./people.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/people', new People(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('people');

  service.hooks(hooks);
};
