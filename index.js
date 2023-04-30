const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

const port = 8084

// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// DB Conn
const sequelize = new Sequelize()


app.listen(port, _ => console.log(`Listening on port ${port}!`))