const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()


const DB = dotenv.parsed.DB
const USER = dotenv.parsed.USER
const PASSWORD = dotenv.parsed.PASSWORD

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: "localhost",
    dialect: "mysql"
})