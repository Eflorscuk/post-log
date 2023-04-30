const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')

const port = 8084

// Template Engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.get('/register', (req, res) => {
    res.render('form')
})

app.post('/add', (req, res) => {
    const title = req.body.title
    const content = req.body.content
    res.send(`Test => Title: ${title} content: ${content}`)
})

app.listen(port, _ => console.log(`Listening on port ${port}!`))