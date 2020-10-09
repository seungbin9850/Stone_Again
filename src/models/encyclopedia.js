module.exports = (sequelize, DataTypes) => {
  return sequelize.define("encyclopedia", {
    userId: {
      type: DataTypes.STRING(100),
    },
    level: {
      type: DataTypes.INTEGER,
    },
    goal: {
      type: DataTypes.STRING(255),
    },
    date: {
      type: DataTypes.STRING(20),
    },
  });
};
