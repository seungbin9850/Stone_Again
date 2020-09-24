module.exports = (sequelize, DataTypes) => {
  return sequelize.define("todo", {
    todo: {
      type: DataTypes.STRING(255),
    },
    delete: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(100),
    },
  });
};
