var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
});


http.listen(process.env.PORT || 5000, function(){
    console.log('listening on: 5000 port');
});
