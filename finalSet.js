module.exports = function(app) {
    app.get("/MARIO", function(request, response) {
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            return response.render("pages/newgameultra/stage2");
        }
        response.redirect('/404');
    });

    app.get("/DEFENESTRATE", function(request, response) {
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            return response.render("pages/newgameultra/stage3");
        }
        response.redirect('/404');
    });

    var activeAttempts = {};

    app.get("/GROUNDBREAKING", function(request, response) {
        var IP = request.headers['x-forwarded-for'];
        if(!activeAttempts[IP]) {
            activeAttempts[IP] = {
                active: true,
                attempts: 0,
                handle: null
            }
        }
        clearTimeout(activeAttempts[IP].handle);
        activeAttempts[IP].active = true;
        activeAttempts[IP].attempts++;
        activeAttempts[IP].handle = setTimeout(function() {
             activeAttempts[IP].active = false;
        }, 1000 * 60);
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            return response.render("pages/newgameultra/stage4", {hint: activeAttempts[IP].attempts > 1});
        }
        response.redirect('/404');
    });

    app.get("/SAVELAURAANDGAVINGODDAMMIT", function(request, response) {
        var IP = request.headers['x-forwarded-for'];
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            if(!activeAttempts[IP]) {
                return response.redirect('/404');
            }
            else if (activeAttempts[IP].active == false) {
                return response.render("pages/newgameultra/failedgame");
            }
            else {
                clearTimeout(activeAttempts[IP].handle);
                if(activeAttempts[IP].attempts == 1) {
                    activeAttempts[IP].attempts++;
                    return response.render("pages/newgameultra/speedypuzzle");
                }
                else return response.render("pages/newgameultra/stage5");
            }
        }
        response.redirect('/404');
    });

    app.post("/SAVELAURAANDGAVINGODDAMMIT", function(request, response) {
        var dimension = request.body.dimension;
        if(!dimension) dimension = "";
        dimension = dimension.toUpperCase().trim();
        var gen = require("random-seed");
        var fs = require("fs");
        var path = "";
        var endings = {
            "33": "firstending",
            "54": "secondending",
            "66": "thirdending",
            "87": "1and2",
            "99": "1and3",
            "120": "2and3",
            "153": "trueending",
        };
        var files = fs.readdirSync("./views/pages/newgameultra/endings/");
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            if(endings[dimension]) {
                path = "pages/newgameultra/" + endings[dimension];
            }
            else {
                var rand = gen.create(dimension);
                var n = rand(files.length);
                path = "pages/newgameultra/endings/" + files[n];
            }
            if(dimension == "153") {
                var helper = require('sendgrid').mail;
                var from_email = new helper.Email('admin@longlivegav.in');
                var to_email = new helper.Email('jedidrunkenllama@gmail.com');
                var subject = 'Ending time!';
                var content = new helper.Content('text/plain', "Someone at the IP of " + request.headers['x-forwarded-for'] + " got the true ending!");
                var mail = new helper.Mail(from_email, subject, to_email, content);

                var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
                var request = sg.emptyRequest({
                    method: 'POST',
                    path: '/v3/mail/send',
                    body: mail.toJSON(),
                });

                sg.API(request, function(error, response) {
                });
            }
            
            return response.render(path, {count: files.length + Object.keys(endings).length});
        }
        response.redirect('/404');
    });

    app.get('/DIRIGIBLE/MARIO', function(request, response) {
        response.redirect('/MARIO');
    });

    app.get('/MARIO/DEFENESTRATE', function(request, response) {
        response.redirect('/DEFENESTRATE');
    });

    app.get('/DEFENESTRATE/GROUNDBREAKING', function(request, response) {
        response.redirect('/GROUNDBREAKING');
    });

    app.get('/MARIO/PMOSH.rar', function(request, response) {
        response.redirect('/PMOSH.rar');
    });
}