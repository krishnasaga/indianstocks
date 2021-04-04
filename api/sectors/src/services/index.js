const sectors = require('./sectors/sectors.service.js');
const metrics = require('./metrics/metrics.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(sectors);
  app.configure(metrics);
};
