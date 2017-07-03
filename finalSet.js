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
            if(!activeAttempts[IP] || activeAttempts[IP].active == false) {
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
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            var files = fs.readdirSync("pages/newgameultra/endings/");
            var rand = gen.create(dimension);
            var n = rand(files.length);
            path = "pages/newgameultra/endings/" + files[n];
            return response.render(path);
        }
        response.redirect('/404');
        //res.json({script: "console.log();"})
        //res.json({script:script, idea: idea});
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