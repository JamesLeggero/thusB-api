require('dotenv').config()
const { Sequelize } = require('sequelize');

const { PG_URI } = process.env

module.exports = new Sequelize(PG_URI)