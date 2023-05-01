const express = require("express")
const app = express()
const Handlebars = require('handlebars')
const { engine } = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const bodyParser = require('body-parser')
const Post = require('./models/Posts')

const port = 8084

// Template Engine
app.engine('handlebars', engine({ 
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars) 
}))
app.set('view engine', 'handlebars')
app.set('views', './views')

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
    Post.findAll().then(posts => {
        res.render('home', {posts: posts})
    })
    // Descrecent order
    // Post.findAll({ order: [['id', 'DESC']] })
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

app.get('/delete/:id', (req, res) => {
    Post.destroy({ where: { 'id': req.params.id } })
        .then(_ => res.send("Post Deleted"))
        .catch(err => res.send('Error ', err))
})

app.listen(port, _ => console.log(`Listening on port ${port}!`))