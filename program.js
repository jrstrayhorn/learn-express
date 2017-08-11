// node.exe program.js 17031
// open http://localhost:17031/home

/*
// 1 - Hello World Express server
var express = require('express')
var app = express()
app.get('/home', function(req, res) {
    res.end('Hello World!')
})
app.listen(process.argv[2])
*/

//var path = require('path')
//console.log(process.argv[0], process.argv[1], process.argv[2], process.argv[3])
//console.log(path.join(__dirname, 'public'))

/*
// 2 - Serve static files
var path = require('path')
var express = require('express')
var app = express()
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2])
*/

/*
// 3 - Serve home page rendered by Pug template engine
var express = require('express')
var app = express()
var path = require('path')

app.set('view engine', 'pug')
app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
*/

/*
// 4 - Processing traditional (non-AJAX) web forms
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// using route-only parsing, instead of global parsing
app.post('/form', urlencodedParser, function(req, res) {
    res.end(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])
*/

/*
// 5 - Creating CSS on the fly
var path = require('path')
var express = require('express')
var app = express()
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2])
*/

/*
// 6 - Handling params in routes
var express = require('express')
var app = express()

app.put('/message/:ID', function(req, res) {
    res.end(require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.ID)
        .digest('hex'))
})
app.listen(process.argv[2])
*/

/*
// 7 - Handling URL query string (urlencoded) params

var express = require('express')
var app = express()

app.get('/search', function(req, res) {
    res.send(req.query)
})

app.listen(process.argv[2])
*/

// 8 - Handling JSON

var express = require('express')
var fs = require('fs')

var app = express()

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if (err) {
            return res.sendStatus(500)
        }

        var fileJSON = JSON.parse(data.toString());

        res.json(fileJSON);
        
    })
})

app.listen(process.argv[2])

