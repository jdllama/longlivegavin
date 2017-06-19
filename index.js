var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(function(req, res, next) {
  for (var key in req.query)
  { 
    req.query[key.toLowerCase()] = req.query[key];
  }
  next();
});


app.get('/', function(request, response) {
  response.render('pages/stage1');
});

app.get('/HSIM7', function(request, response) {
  response.render('pages/stage2');
});

app.get('/PMOSH', function(request, response) {
  response.render('pages/stage3');
});

app.get("/BEGINS", function(request, response) {
  response.render('pages/stage4');
}); 

app.get('/HSIM7/PMOSH', function(request, response) {
  response.redirect('/PMOSH');
});

app.get('/HSIM7/PMOSH/BEGINS', function(request, response) {
  response.redirect('/BEGINS');
});

app.get("/JDtest", function(request, response) {
  response.render('pages/finalstage');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


