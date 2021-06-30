// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const ideas = sequelizeClient.define('ideas', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    backgroundImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    intro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    insights: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  ideas.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    ideas.belongsToMany(models.companies,{
      through: 'ideas_to_companies_map',
      foreignKey: 'idea_id'
    })
  };


  return ideas;
};

