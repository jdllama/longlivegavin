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

app.get("*", function(request, response) {
  response.redirect('/404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


