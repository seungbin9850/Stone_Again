module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    userId: {
      type: DataTypes.STRING(100),
      unique: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(100),
    },
    name: {
      type: DataTypes.STRING(20),
    },
    first: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    hour: {
      type: DataTypes.INTEGER,
      defaultValue: 24,
    },
    minute: {
      type: DataTypes.INTEGER,
      defaultValue: 00,
    },
  });
};
