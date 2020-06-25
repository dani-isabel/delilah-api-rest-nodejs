const Sequelize = require("sequelize");
const database = require("../database");

const Products = database.define("products", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    require: true,
    allowNull: false,
    validate: { notEmpty: true },
  },
  price: {
    type: Sequelize.DECIMAL,
    require: true,
    allowNull: false,
    validate: { notEmpty: true },
  },
  stock: {
    type: Sequelize.INTEGER,
    require: true,
    allowNull: false,
    validate: { notEmpty: true },
  },
  image: {
    type: Sequelize.STRING,
    require: true,
    allowNull: false,
    validate: { notEmpty: true },
  },
});

module.exports = Products;