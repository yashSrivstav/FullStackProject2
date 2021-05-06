const express = require('express')
const app = express()
const alert = require('alert')
var bodyParser = require('body-parser')
var encoder = bodyParser.urlencoded();
const mongoose = require('mongoose')
const writers = require('./model')


mongoose.connect('mongodb://writer:yJiJFRNpyKfZ0PNb@cluster0-shard-00-00.dn4nc.mongodb.net:27017,cluster0-shard-00-01.dn4nc.mongodb.net:27017,cluster0-shard-00-02.dn4nc.mongodb.net:27017/author?ssl=true&replicaSet=atlas-2x81b7-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
)
// writers.find({}, (err, data) => {
//     if (err) console.log(err)
//     console.log(data)
// })


app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/HTML/team.html')
})

app.get('/adminlogin', (req, res) => {
    res.sendFile(__dirname + '/HTML/login.html')
})

app.get('/submit', (req, res) => {
    res.sendFile(__dirname + '/HTML/form.html')
})

app.post('/submit', encoder, function (req, res) {
    const data = new writers({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        insta_id: req.body.insta,
        category: req.body.Category,
        msg: req.body.message,
    })
    data.save().then((result) => {
        console.log("inserted")
    }).then(() => {
        alert(`${req.body.Category} Submitted`)
        res.sendFile(__dirname + "/index.html")
    })
        .catch((err) => { console.log(error) })
})

app.listen(4500)
