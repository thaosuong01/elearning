'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_courses.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    enrol: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User_courses',
  });
  return User_courses;
};