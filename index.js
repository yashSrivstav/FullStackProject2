const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var encoder = bodyParser.urlencoded();
const mongoose = require('mongoose')
//model for submission page
//login form connect to db
//db connection
//images from backend
//a html page where all the data of submission can be seen
//post route for submit
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

app.get('/adminlogin', (req, res) => {
    res.sendFile(__dirname + '/HTML/login.html')
})

app.listen(4500)