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
                attempts: 0
            }
        }
        activeAttempts[IP].active = true;
        activeAttempts[IP].attempts++;
        setTimeout(function() {
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
                return response.render("pages/newgameultra/stage5");
            }
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