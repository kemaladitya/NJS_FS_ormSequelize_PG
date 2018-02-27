<<<<<<< HEAD


let express = require('express'),
    pg = require('pg'),
    bodyParser = require('body-parser'),
    models = require('./models');


var app = express();
=======
let express = require('express'),
			pg = require('pg'),
			bodyParser = require('body-parser'),
			models = require('./models');

let app = express();
>>>>>>> 3b00facc04204b60aa8a5ff7f634d2483df1876f

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


<<<<<<< HEAD

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

/////


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
=======
let fac = models.faculty
let stud = models.student
let univ = models.university




app.get('/', function(req,res) {
	univ.findAll(
		{
		where :{facultyId:2},
		include:[{model : fac}]
	}
).then(function (data) {
		//var facdat= data
			res.send(data)
	})
	// stud.findAll().then(function (data) {
	// 	var studdat =data
	// 	res.send({data: facdat,studdat});
	// })
	// console.log('hai');
})


app.post('/addstud', function (req,res) {
	stud.create({namestud:req.body.namestud}).then( ()=> { console.log('saved'); res.redirect('/')})

})

app.post('/addfac', function (req,res) {
	fac.create({namefac:req.body.namefac}).then( ()=> { console.log('saved'); res.redirect('/')})

})

app.post('/univ', function (req,res) {
	console.log(req.body);
	
	univ.create({name:req.body.name, studentId:req.body.studentId, facultyId:req.body.facultyId}).then( ()=> {
		 res.redirect('/')
	})

})






///serv
app.listen('3000',function () {
	console.log('jalan di port 3000');
})
>>>>>>> 3b00facc04204b60aa8a5ff7f634d2483df1876f
