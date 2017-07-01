module.exports = function(app) {
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

app.get("/NEWGAMEULTRA", function(request, response) {
  response.cookie("ITS_CLYDE_TIME", "", {expires: new Date()}).cookie("GO_FOR_THE_GOOD_ENDING", true).redirect('/');
});

app.get('/DIRIGIBLE/POOKA', function(request, response) {
  response.redirect('/POOKA');
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

    app.get('/HANKCHIEN/PMOSH.rar', function(request, response) {
    response.redirect('/PMOSH.rar');
    });
}