const Sequelize = require("sequelize");
const config = require("../config/config");
const db = {};

const sequelize = new Sequelize({ config }, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
