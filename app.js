<<<<<<< HEAD


let express = require('express'),
    pg = require('pg'),
    bodyParser = require('body-parser'),
    models = require('./models');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

let item = models.item
let player = models.player
let pi = models.playerItem

app.get('/:pid',function (req,res) {
    player.findAll({
        where: {id: req.params.pid},
        include:[{model: item}]
    }).then(function (data) {

        res.send(data)
    })
       
})


app.post('/item',function (req,res) {
    item.create({value:req.body.value}).then(function () {
        res.redirect('/');
    })
})

app.post('/player',function (req,res) {
    player.create({name:req.body.name}).then(function () {
        res.redirect('/')
    })
       
})

app.post('/playeritem',function (req,res) {
    pi.create({playerId:req.body.playerId,itemId:req.body.itemId}).then(function () {
        res.redirect('/')
    })
       
})

app.listen('8000', function(){
    console.log('runing in port 8000');
    
});
