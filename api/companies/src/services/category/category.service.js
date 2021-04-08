// Initializes the `category` service on path `/category`
const { Category } = require('./category.class');
const createModel = require('../../models/category.model');
const hooks = require('./category.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/category', new Category(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('category');

  service.hooks(hooks);
};
