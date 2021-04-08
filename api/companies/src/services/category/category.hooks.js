

module.exports = {
  before: {
    all: [],
    find: [function (context) {
      const { include, ...query } = context.params.query;

      if (include) {
        const companies = context.app.services.company.Model;
        context.params.sequelize = {
          raw: false,
          include: [{ model: companies, attributes: ['id','name'], as: 'companies' }]
        };
        // Update the query to not include `include`
        context.params.query = query;
      }

      return context;
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
