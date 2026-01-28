// models/Order.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
  total: DataTypes.FLOAT,
  status: DataTypes.STRING
});

module.exports = Order;
