// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  googleId: DataTypes.STRING,
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

module.exports = User;
