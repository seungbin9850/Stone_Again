module.exports = (sequelize, DataTypes) => {
  return sequelize.define("stone", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    exp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    left: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.STRING(100),
    },
  });
};
