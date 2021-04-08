const people = require('./people/people.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(people);
};
