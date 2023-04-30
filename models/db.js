const path = require('path')
const Sequelize = require('sequelize')
const dotenv = require('dotenv').config({
    path: path.join(__dirname, '../.env')
})

const DB = dotenv.parsed.DB
const USER = dotenv.parsed.USER
const PASSWORD = dotenv.parsed.PASSWORD

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize,
    sequelize
}