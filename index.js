var express = require('express');
var app = express();
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());


app.use(function(req, res, next) {
  for (var key in req.query)
  { 
    req.query[key.toLowerCase()] = req.query[key];
  }
  next();
});

require("./sharedSet")(app);
require("./firstSet")(app);
require("./secondSet")(app);
require("./finalSet")(app);

app.get("/NEWGAMEULTRA", function(request, response) {
  response.cookie("ITS_CLYDE_TIME", "", {expires: new Date()}).cookie("GO_FOR_THE_GOOD_ENDING", true).redirect('/');
});

app.get("/POOKA", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/stage2");
  }
  response.redirect('/404');
});

app.get("/HANKCHIEN", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/stage3");
  }
  response.redirect('/404');
});

app.get("/TURBOFART69", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/stage4");
  }
  response.redirect('/404');
});

app.get("/TRAPGAVIN", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/stage5");
  }
  response.redirect('/404');
});

app.get("/INCREDULOUS", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/stage6");
  }
  response.redirect('/404');
});

app.get("/MARIO", function(request, response) {
  if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
    return response.render("pages/newgameultra/stage2");
  }
  response.redirect('/404');
});

app.get('/DIRIGIBLE/POOKA', function(request, response) {
  response.redirect('/POOKA');
});

app.get('/DIRIGIBLE/MARIO', function(request, response) {
  response.redirect('/MARIO');
});

app.get('/POOKA/HANKCHIEN', function(request, response) {
  response.redirect('/HANKCHIEN');
});

app.get('/HANKCHIEN/TURBOFART69', function(request, response) {
  response.redirect('/TURBOFART69');
});

app.get('/TURBOFART69/TRAPGAVIN', function(request, response) {
  response.redirect('/TRAPGAVIN');
});

app.get('/TRAPGAVIN/INCREDULOUS', function(request, response) {
  response.redirect('/INCREDULOUS');
});

app.get("*", function(request, response) {
  response.redirect('/404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


