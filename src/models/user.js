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
    time: {
      type: DataTypes.STRING(30),
      defaultValue: "24:00",
    },
  });
};
