// models/Payment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payment = sequelize.define("Payment", {
  amount: DataTypes.FLOAT,
  provider: DataTypes.STRING,
  status: DataTypes.STRING
});

module.exports = Payment;
