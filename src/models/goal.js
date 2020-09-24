module.exports = (sequelize, DataTypes) => {
  return sequelize.define("goal", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    do: {
      type: DataTypes.STRING(255),
    },
    deadline: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(100),
    },
  });
};
