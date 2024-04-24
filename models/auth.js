'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
            auth.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }
  }
  auth.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'auth',
  });
  return auth;
};