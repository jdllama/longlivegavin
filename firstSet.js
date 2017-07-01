module.exports = function(app) {
    app.get('/PINKY', function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/no");
  }
  else if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
    return response.redirect('/404');
  }
  response.render('pages/stage2');
});

app.get('/DONGLE', function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/no");
  }
  else if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
    return response.redirect('/404');
  }
  response.render('pages/stage3');
});

app.get("/BEGINS", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/no");
  }
  else if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
    return response.redirect('/404');
  }
  response.render("pages/nostop");
});

app.get("/ENDS", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/no");
  }
  else if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
    return response.redirect('/404');
  }
  response.render("pages/sadstory");
});

app.get("/FREEGAVIN", function(request, response) {
  if(request.cookies.ITS_CLYDE_TIME) {
    return response.render("pages/newgameplus/no");
  }
  response.render('pages/finalstage');
});

app.post("/FREEGAVIN", function(req, res) {
  var idea = req.body.idea;
  if(!idea) idea = "";
  idea = idea.toUpperCase().trim();
  var goodbyeMessage = "YES! It worked! I can feel my essence changing into a song idea now. Now, every time you hear Smash Mouth - All Star, I will live on even for the briefest of moments! I don't know if we will meet again, but if so, I will miss you.<br /><br />Although it's weird, I feel like something's following me LOL";
  var correctScript = "$('#response').html('');$('body').append('<link rel=\"stylesheet\" type=\"text/css\" href=\"http://csshake.surge.sh/csshake.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/style.css\" />'); $('#holder').addClass('shake-hard shake-opacity shake-constant');$('#button').prop('disabled', true);setTimeout(function() {$('#holder').remove(); $('body').append(\"<audio id='player'><source src='1.mp3'></audio>\");setTimeout(function() {$('#player')[0].play();}, 2000); setTimeout(function() {$('body').addClass('body');$('#response').html(\"" + goodbyeMessage + "\");setTimeout(function() {$('body').append(\"<br /><div class='TJWGr6D8kZs'><a href='ThankYouDanger' title='See you around, amigo' alt='See you around, amigo'>>:)</a></div>\");document.title = 'See you around, amigo';}, 1000 * 20);}, 2000);}, 3000);";
  var potentialMessages = [
    "No, not quite, doesn't let me link in",
    "Hmmm. Have you tried smashing your mouth across the keyboard? It sounds like fun LOL",
    "Nope, try again! I believe in you, just like you believed in me!",
    "Sorry, no, but it's OK, you got this LOL",
    "No!"
  ];
  var script = "$('#response').html(\"" + potentialMessages[Math.floor(Math.random()*potentialMessages.length)] + "\")";
  if(idea === "ALLSTAR" || idea === "ALL STAR" || idea === "ALL-STAR" || idea === "ALL*STAR") {
    var helper = require('sendgrid').mail;
    var from_email = new helper.Email('admin@longlivegav.in');
    var to_email = new helper.Email('jedidrunkenllama@gmail.com');
    var subject = 'Someone solved the puzzle!!';
    var content = new helper.Content('text/plain', JSON.stringify({IP: req.headers['x-forwarded-for']}));
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
    });
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

app.get("/NEWGAMEPLUS", function(request, response) {
  response.cookie("ITS_CLYDE_TIME", true).redirect('/');
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

app.get('/PINKY/PMOSH.rar', function(request, response) {
  response.redirect('/PMOSH.rar');
});
}