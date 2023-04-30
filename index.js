const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

const port = 8084

// Template Engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Conn
// const sequelize = new Sequelize()

// Routes
app.get('/register', (req, res) => {
    res.render('form')
})

app.post('/add', (req, res) => {
    res.send('Formulário recebido')
})

app.listen(port, _ => console.log(`Listening on port ${port}!`))