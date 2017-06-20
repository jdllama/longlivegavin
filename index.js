var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use(function(req, res, next) {
  for (var key in req.query)
  { 
    req.query[key.toLowerCase()] = req.query[key];
  }
  next();
});

app.get("/", function(req, res) {
  res.status(404).send("AY YO WE AIN'T READY YET BRO");
});

app.get('/stage1', function(request, response) {
  var black = function(num) {
    return "<span style='color: black;'>" + num + "</span>";
  }
  var red = function(num) {
    return "<span style='color: red;'>" + num + "</span>";
  }
  var blue = function(num) {
    return "<span style='color: blue;'>" + num + "</span>";
  }
  var white = function(num) {
    return "<span style='color: white;'>" + num + "</span>";
  }
  var blinkyParts = [
    [black(3),red(4),black(3)],
    [black(2),red(6),black(2)],
    [black(1),red(1),white(2),red(2),white(2),red(1),black(1)],
    [black(1),blue(2),white(1),red(2),blue(2),white(1),red(1)],
    [red(1),blue(2),white(1),red(2),blue(2),white(1),red(1)],
    [red(2),white(1),red(4),white(1),red(2)],
    [red(10)],
    [red(10)],
    [red(1),black(1),red(2),black(2),red(2),black(1),red(1)],
    [red(1),black(2),red(1),black(2),red(1),black(2),red(1)]
  ];
  var index = Math.floor(Math.random()*blinkyParts.length);
  var item = blinkyParts[index];
  response.render('pages/stage1', {ghostPiece: item.join(""), ghostLength: blinkyParts.length, ghostIndex: index + 1});
});

app.get('/BLINKY', function(request, response) {
  response.render('pages/stage2');
});

app.get('/DONGLE', function(request, response) {
  response.render('pages/stage3');
});

app.get("/BEGINS", function(request, response) {
  response.render('pages/stage4');
});

app.get('/BLINKY/DONGLE', function(request, response) {
  response.redirect('/DONGLE');
});

app.get('/DONGLE/BEGINS', function(request, response) {
  response.redirect('/BEGINS');
});

app.get('/BLINKY/PMOSH.rar', function(request, response) {
  response.redirect('/PMOSH.rar');
});

app.get("/JDfartsalot", function(request, response) {
  response.render('pages/sadstory');
});

var finalURL = "/JDtest";
app.get(finalURL, function(request, response) {
  response.render('pages/finalstage');
});

app.post(finalURL, function(req, res) {
  var obj = req.idea;
  var correctScript = "$('#button, #idea').attr('disabled', true);$('body').addClass('evilbody');$('#response').html(\"Thank you so much for all of your help! I wish I could pay you back somehow, but whenever you hear my idea, think of me! I hope you think I'm cool forever LOL\");setTimeout(function() {$('body').append(\"<br /><div class='evilreturns'><a href='fake'>>:)</a></div>\");document.title = 'See you around, amigo';}, 1000 * 20);";
  res.json({script:correctScript, idea: obj});
});

//app.get("*", function(req, res) {
app.get("/fakepage", function(req, res) {
  var gavinFacts = [
    "The Jeffcoat name came from Sir Gweyneldor Useyourskinascoat, who used his first opponent, Jeff, as a skin. Rumor has it it was very loose and fluffy.",
    "Gavin once calculated the likelihood of a couch being haunted simply off the top of his head!...The likelihood was zero.",
    "Gavin uses the phrase 'LOL' like most people use oxygen. That's not hyperbole, he literally breathes acronyms. Please stand five feet away when he ROTFL.",
    "Could Gavin draw a penis so big that it WOULDN'T make him laugh? Yes. The last time he did, it came to life and attached to his pelvis.",
    "'Gavin' is Latin for 'hot dog'!",
    "One of the Gavins is an excellent lawyer! He got a \"Public Lewdness with an Unlicensed Badger\" charge reduced to \"Public Fursona But It's Totally Cool You Guys\".",
    "A multitude of Gavins owned hammer factories!....Wait, I don't.........awwww.",
    "There was no headway made in the Jeffcoat Murder Case, although A Woke AF Skull had no alibi.",

  ];
  res.status(404);
  var item = gavinFacts[Math.floor(Math.random()*gavinFacts.length)];
  res.render("pages/404", {fact: item});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


