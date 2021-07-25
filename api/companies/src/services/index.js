const users = require('./users/users.service.js');
const category = require('./category/category.service.js');
const company = require('./company/company.service.js');
const ideas = require('./ideas/ideas.service.js');
const ipos = require('./ipos/ipos.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(category);
  app.configure(company);
  app.configure(ideas);
  app.configure(ipos);
};
