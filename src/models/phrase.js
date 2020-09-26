module.exports = (sequelize, DataTypes) => {
  return sequelize.define("phrase", {
    name: {
      type: DataTypes.STRING(20),
    },
    word: {
      type: DataTypes.STRING(200),
    },
  });
};
