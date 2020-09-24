const Sequelize = require("sequelize");
const config = require("../config/config");
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Todo = require("./todo")(sequelize, Sequelize);
db.Goal = require("./goal")(sequelize, Sequelize);
db.Stone = require("./stone")(sequelize, Sequelize);

db.User.hasOne(db.Goal, { foreignKey: "userId", targetKey: "userId" });
db.Goal.belongsTo(db.User, { foreignKey: "userId" });
db.User.hasMany(db.Todo, { foreignKey: "userId", targetKey: "userId" });
db.Todo.belongsTo(db.User, { foreignKey: "userId" });
db.User.hasOne(db.Stone, { foreignKey: "userId", targetKey: "userId" });
db.Stone.belongsTo(db.User, { foreignKey: "userId" });

module.exports = db;
