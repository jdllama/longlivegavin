module.exports = function(app) {
    app.get("/", function(req, res) {
        if(req.cookies.ITS_CLYDE_TIME) {
            res.render("pages/newgameplus/stage0");
        }
        else if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            res.render("pages/newgameultra/stage0");
        }
        else {
            res.render('pages/stage0');
        }
    });

    app.get('/DIRIGIBLE', function(request, response) {
        var black = function(num) {
            return "<span style='color: black;'>" + num + "</span>";
        }
        var pink = function(num) {
            return "<span style='color: #ff0dbf;'>" + num + "</span>";
        }
        var blue = function(num) {
            return "<span style='color: blue;'>" + num + "</span>";
        }
        var white = function(num) {
            return "<span style='color: white;'>" + num + "</span>";
        }
        var red = function(num) {
            return "<span style='color: red;'>" + num + "</span>";
        }
        var yellow = function(num) {
            return "<span style='color: yellow;'>" + num + "</span>";
        }
        var gray = function(num) {
            return "<span style='color: gray;'>" + num + "</span>";
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
        var pookaParts = [
            [white(2),red(8),white(3),],
        [white(1),yellow(8),red(2),white(2),],
        [yellow(2),white(6),yellow(2),red(2),white(1),],
        [yellow(1),white(1),black(1),white(2),black(1),white(3),yellow(3),white(1),],
        [yellow(1),white(1),black(1),white(2),black(1),white(3),yellow(3),white(1),],
        [yellow(1),white(2),yellow(1),white(4),yellow(2),red(2),white(1),],
        [yellow(9),red(3),gray(1),],
        [red(1),yellow(2),red(2),yellow(3),red(3),white(1),gray(1),],
        [white(1),red(9),gray(3),],
        [white(2),red(1),yellow(1),red(4),yellow(1),red(1),white(3),],
        [white(3),yellow(1),white(4),yellow(1),white(4),],
        [white(1),yellow(4),white(1),yellow(4),white(3),],
        [`While I dig this arcade game from 1982, enemies like this are full of hot air. - >:)`]
        ];
        var marioParts = [
            ["<span myColor='#ffffff'>3</span>", "<span myColor='#000000'>2</span>", "<span myColor='#ffffff'>4</span>", "<span myColor='#000000'>2</span>", "<span myColor='#ffffff'>4</span>"],
            ["<span myColor='#ffffff'>3</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>1</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ffffff'>1</span>", "<span myColor='#000000'>2</span>", "<span myColor='#f0d0b0'>1</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ffffff'>4</span>"],
            ["<span myColor='#ffffff'>3</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>2</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ff0000'>3</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ffffff'>4</span>"],
            ["<span myColor='#ffffff'>3</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>2</span>", "<span myColor='#ff0000'>4</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ffffff'>4</span>"],
            ["<span myColor='#ffffff'>2</span>", "<span myColor='#000000'>2</span>", "<span myColor='#f0d0b0'>1</span>", "<span myColor='#ff0000'>2</span>", "<span myColor='#000000'>6</span>", "<span myColor='#ffffff'>2</span>"],
            ["<span myColor='#ffffff'>1</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ff0000'>3</span>", "<span myColor='#000000'>9</span>", "<span myColor='#ffffff'>1</span>"],
            ["<span myColor='#ffffff'>1</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ff0000'>2</span>", "<span myColor='#000000'>2</span>", "<span myColor='#f0d0b0'>5</span>", "<span myColor='#000000'>2</span>", "<span myColor='#ffffff'>2</span>"],
            ["<span myColor='#000000'>5</span>", "<span myColor='#f0d0b0'>3</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>1</span>", "<span myColor='#000000'>2</span>", "<span myColor='#ffffff'>3</span>"],
            ["<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>2</span>", "<span myColor='#000000'>2</span>", "<span myColor='#f0d0b0'>3</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>1</span>", "<span myColor='#000000'>3</span>", "<span myColor='#ffffff'>2</span>"],
            ["<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>2</span>", "<span myColor='#000000'>3</span>", "<span myColor='#f0d0b0'>7</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ffffff'>1</span>"],
            ["<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>3</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>2</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>5</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ffffff'>1</span>"],
            ["<span myColor='#ffffff'>1</span>", "<span myColor='#000000'>1</span>", "<span myColor='#f0d0b0'>4</span>", "<span myColor='#000000'>4</span>", "<span myColor='#f0d0b0'>2</span>", "<span myColor='#000000'>3</span>"],
            ["<span myColor='#ffffff'>2</span>", "<span myColor='#000000'>2</span>", "<span myColor='#f0d0b0'>4</span>", "<span myColor='#000000'>5</span>", "<span myColor='#ffffff'>2</span>"],
            ["<span myColor='#ffffff'>3</span>", "<span myColor='#000000'>2</span>", "<span myColor='#f0d0b0'>5</span>", "<span myColor='#000000'>1</span>", "<span myColor='#ffffff'>4</span>"],
            ["<span myColor='#ffffff'>5</span>", "<span myColor='#000000'>5</span>", "<span myColor='#ffffff'>5</span>"],
        ];
        var parts;
        if(request.cookies.ITS_CLYDE_TIME) {
            parts = pookaParts;
        }
        else if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            parts = marioParts;
        }
        else {
            parts = pinkyParts;
        }
        var index = Math.floor(Math.random()*parts.length);
        var item = parts[index].reverse();
        response.render('pages/stage1', {ghostPiece: item.join(""), ghostLength: parts.length, ghostIndex: index + 1});
    });
}