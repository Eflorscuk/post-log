const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')

const port = 8084

// Template Engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// DB Conn
// const sequelize = new Sequelize()


app.listen(port, _ => console.log(`Listening on port ${port}!`))