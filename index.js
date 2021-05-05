const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var encoder = bodyParser.urlencoded();
app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/HTML/team.html')
})

app.get('/submit', (req, res) => {
    res.sendFile(__dirname + '/HTML/form.html')
})
app.listen(4500)