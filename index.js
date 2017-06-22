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
  res.render('pages/stage0');
  //res.status(404).send("AY YO WE AIN'T READY YET BRO");
});

app.get('/DIRIGIBLE', function(request, response) {
  var black = function(num) {
    return "<span style='color: black;'>" + num + "</span>";
  }
  var pink = function(num) {
    return "<span style='color: #ffb8de;'>" + num + "</span>";
  }
  var blue = function(num) {
    return "<span style='color: #2022de;'>" + num + "</span>";
  }
  var white = function(num) {
    return "<span style='color: white;'>" + num + "</span>";
  }
  var pinkyParts = [
    [black(3),pink(4),black(3)],
    [black(2),pink(6),black(2)],
    [black(1),pink(1),white(2),pink(2),white(2),pink(1),black(1)],
    [black(1),blue(2),white(1),pink(2),blue(2),white(1),pink(1)],
    [pink(1),blue(2),white(1),pink(2),blue(2),white(1),pink(1)],
    [pink(2),white(1),pink(4),white(1),pink(2)],
    [pink(10)],
    [pink(10)],
    [pink(1),black(1),pink(2),black(2),pink(2),black(1),pink(1)],
    [pink(1),black(2),pink(1),black(2),pink(1),black(2),pink(1)]
  ];
  var index = Math.floor(Math.random()*pinkyParts.length);
  var item = pinkyParts[index].reverse();
  response.render('pages/stage1', {ghostPiece: item.join(""), ghostLength: pinkyParts.length, ghostIndex: index + 1});
});

app.get('/PINKY', function(request, response) {
  response.render('pages/stage2');
});

app.get('/DONGLE', function(request, response) {
  response.render('pages/stage3');
});

app.get("/ENDS", function(request, response) {
  response.render("pages/sadstory");
});

app.get("/BEGINS", function(request, response) {
  response.render("pages/nostop");
});

app.get("/THANKYOUDANGER", function(request, res) {
  var responses = [];
  responses.push({name: "Comrade", html: `<audio controls><source src="thankyoufiles/comrade.mp3" type="audio/mpeg"></audio>`});
  responses.push({name: "joshy216", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qrL1FOo5iqE" frameborder="0" allowfullscreen></iframe>`});
  responses.push({name: "Marn", html: `<img src="thankyoufiles/marn.png" />`});
  res.render('pages/danger', {responses: responses});
});

var finalURL = "/FREEGAVIN";
app.get(finalURL, function(request, response) {
  //response.send("This is the last page. I'm keeping the ending a secret for now, though.");
  response.render('pages/finalstage');
});

app.post(finalURL, function(req, res) {
  var idea = req.body.idea;
  if(!idea) idea = "";
  idea = idea.toUpperCase().trim();
  var goodbyeMessage = "YES! It worked! I can feel my essence changing into a song idea now. Now, every time you hear Smash Mouth - All Star, I will live on even for the briefest of moments! I don't know if we will meet again, but if so, I will miss you.<br /><br />Although it's weird, I feel like something's following me LOL";
  var correctScript = "$('#response').html('');$('body').append('<link rel=\"stylesheet\" type=\"text/css\" href=\"http://csshake.surge.sh/csshake.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/style.css\" />'); $('#holder').addClass('shake-opacity');$('#button').prop('disabled', true);setTimeout(function() {$('#holder').remove(); $('body').append(\"<audio id='player'><source src='1.mp3'></audio>\");setTimeout(function() {$('#player')[0].play();}, 2000); setTimeout(function() {$('body').addClass('body');$('#response').html(\"" + goodbyeMessage + "\");setTimeout(function() {$('body').append(\"<br /><div class='returns'><a href='ThankYouDanger' title='See you around, amigo' alt='See you around, amigo'>>:)</a></div>\");document.title = 'See you around, amigo';}, 1000 * 20);}, 2000);}, 3000);";
  var potentialMessages = [
    "No, not quite, doesn't let me link in",
    "Hmmm. Have you tried smashing your mouth across the keyboard? It sounds like fun LOL",
    "Nope, try again! I believe in you, just like you believed in me!",
    "Sorry, no, but it's OK, you got this LOL",
    "No!"
  ];
  var script = "$('#response').html(\"" + potentialMessages[Math.floor(Math.random()*potentialMessages.length)] + "\")";
  if(idea === "ALLSTAR" || idea === "ALL STAR" || idea === "ALL-STAR" || idea === "ALL*STAR") {
    script = correctScript;
  }
  else if(idea === "CAN'T GET ENOUGH OF YOU BABY") {
    script = "$('#response').html(\"You've got enough of this baby!...Er, wait. No.\")";
  }
  else if(idea === "WALKIN' ON THE SUN" || idea === "WALKING ON THE SUN" || idea === "WALKIN ON THE SUN") {
    script = "$('#response').html(\"WHO THE HELL LEFT THE SUN ON OVERNIGHT, JESUS CHRIST OW. My feetsies.\")";
  }
  res.json({script:script, idea: idea});
});

app.get('/DIRIGIBLE/PINKY', function(request, response) {
  response.redirect('/PINKY');
});

app.get('/PINKY/DONGLE', function(request, response) {
  response.redirect('/DONGLE');
});

app.get('/DONGLE/BEGINS', function(request, response) {
  response.redirect('/BEGINS');
});

app.get('/ENDS/FREEGAVIN', function(request, response) {
  response.redirect('/FREEGAVIN');
});

app.get('/BLINKY/PMOSH.rar', function(request, response) {
  response.redirect('/PMOSH.rar');
});

/*
app.get("/JDfartsalot", function(request, response) {
  response.render('pages/sadstory');
});*/

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


