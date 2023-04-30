const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Posts')

const port = 8084

// Template Engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/register', (req, res) => {
    res.render('form')
})

app.post('/add', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content
    })
        .then(_ => res.redirect('/'))
        .catch(err => res.send('Error ', err))
})

app.listen(port, _ => console.log(`Listening on port ${port}!`))