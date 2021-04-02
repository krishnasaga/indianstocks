const sectors = require('./sectors/sectors.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(sectors);
};
