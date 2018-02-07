const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/critters', {
  logging: false
});

const Critter = db.define('critter', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM(['dog', 'cat', 'dragon']),
    allowNull: false
  },
});

Critter.fetchType = function(type) {
  return Critter.findAll({
    where: {
      type
    }
  })
}

module.exports = db;
