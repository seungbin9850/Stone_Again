module.exports = (sequelize, DataTypes) => {
  return sequelize.define("diary", {
    content: {
      type: DataTypes.STRING(255),
    },
    userId: {
      type: DataTypes.STRING(100),
    },
  });
};
