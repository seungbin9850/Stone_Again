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
    frist: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    hour: {
      type: DataTypes.INTEGER,
    },
    minute: {
      type: DataTypes.INTEGER,
    },
  });
};
