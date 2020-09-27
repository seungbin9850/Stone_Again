module.exports = (sequelize, DataTypes) => {
  return sequelize.define("check", {
    check: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.STRING(100),
    },
  });
};
