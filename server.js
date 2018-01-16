var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', function(req, res){
	res.render('index')
})

app.listen(8000, function(){
	console.log('listening on 8000 to dropboxExpress')
})