var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/canary-islands', function(req, res){
	res.render('canary-islands');
});

app.get('/cape-verde', function(req,res){
	res.render('cape-verde');
});

app.get('/strait-of-magellan', function(req, res){
	res.render('strait-of-magellan');
});

app.get('/guam', function(req, res){
	res.render('guam');
});

app.get('/philippines', function(req, res){
	res.render('philippines');
});

app.get('/:location', function(req, res){
	var place = req.params.location;
	res.render('nope', {
		place: place
	});
});

app.get('/next/:location', function(req, res){
	
});

var server = app.listen(4693, function() {
	console.log('Express server listening on port ' + server.address().port);
});
