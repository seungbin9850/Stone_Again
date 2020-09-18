const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    name: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
    },
    frist: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
