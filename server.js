const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

// Express HBS
var hbs = require('express-hbs');

require('./hbs/helpers')

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'luis manuel',
    })
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})