// Initializes the `company` service on path `/company`
const { Company } = require('./company.class');
const createModel = require('../../models/company.model');
const hooks = require('./company.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/company', new Company(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('company');

  service.hooks(hooks);
};
