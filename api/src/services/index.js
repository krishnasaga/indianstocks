const sector = require('./sector/sector.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(sector);
};
