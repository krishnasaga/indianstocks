const { Service } = require('feathers-sequelize');

exports.Category = class Category extends Service {

  get(id, params) {
    return super.get(id, params);
  }

  find(params) {
    return super.find(params);
  }

};
