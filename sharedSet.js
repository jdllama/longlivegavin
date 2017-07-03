module.exports = function(app) {
    app.get("/", function(req, res) {
        if(req.cookies.ITS_CLYDE_TIME) {
            res.render("pages/newgameplus/stage0");
        }
        else if(req.cookies.GO_FOR_THE_GOOD_ENDING) {
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

    app.get("/THANKYOUDANGER", function(request, res) {
        var responses = [];
        responses.push({name: "Comrade", html: `<audio controls><source src="thankyoufiles/comrade.mp3" type="audio/mpeg"></audio>`});
        responses.push({name: "joshy216", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qrL1FOo5iqE" frameborder="0" allowfullscreen></iframe>`});
        responses.push({name: "PMosh", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-87yyMJCeLE" frameborder="0" allowfullscreen></iframe>`});
        responses.push({name: "ALittleVoice and GruesomeOne", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JP4z56lYL1I" frameborder="0" allowfullscreen></iframe>`});
        responses.push({name: "Marn", html: `<img src="thankyoufiles/marn.png" />`});
        responses.push({name: "DannyMethane", html: `<img src="thankyoufiles/danny.jpg" style="width:800px" />`});
        responses.push({name: "Pewter", html: `<img src="thankyoufiles/pewter1.jpg" style="width:800px" /><br /><img src="thankyoufiles/pewter2.jpg" style="width:800px" />`});
        responses.push({name: "Funiduber", html: `Hey Danger,<br />Thanks for all the fun putting together all of these ARGs. Even though I wasn't able to fully participate in this one it was still fun seeing all the things you came up with for us to solve. Your characters, from both this ARG and the Blink one, were a lot of fun to intereact with.  I can only imagine the amount of time and effort that went into creating all the puzzles and the stories. GG SYNB`});
        responses.push({name: "timescape", html: `RGFuZ2VyLCB0aGFua3Mgc28gbXVjaCBmb3IgYWxsIHlvdXIgZWZmb3J0cyBvbiBwdXR0aW5nIHRvZ2V0aGVyIHRoZSBKREFURTMgQVJHISBJdCB3YXMgc3VwZXIgZnVuIHRvIHBhcnRpY2lwYXRlIGFuZCBzZWUgd2hlcmUgdGhlIHN0b3J5IHdlbnQuIEkgcmVhbGx5IGxpa2VkIHRoZSBoaWRkZW4gZGF0YSBhc3BlY3RzLCB3aXRoIFJhciEgYW5kIFpJUCBhbmQgUE5HIGFuZCBKUEcgYW5kIFRJRkYgYWxsIHVwIGluIG91ciBmYWNlcyB0byBzb2x2ZSBhcyBhIGhpdmUgbWluZC4gVGhlIHN0b3J5IHdhcyBpbnRlcmVzdGluZyBhbmQgR2F2aW4gZGVmaW5pdGVseSBiZWNhbWUgdmVyeSBmbGVzaGVkIG91dCBhbmQgcmVhbCB0byBtZSwgc28gc29ycnkgR2F2aW4gZm9yIHRoZSB3YXlzIHdlIHVsdGltYXRlbHkgZmFpbGVkIHlvdSA6KSwgb3Igc2hvdWxkIEkgc2F5ID46KQ0KVGhhbmtzIGFnYWluLCBhbmQgc3RheSBncm9vdnkhIH50aW1lc2NhcGU=`});
        responses.push({name: "triplejumpster9000", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OKC2pGRrZUQ" frameborder="0" allowfullscreen></iframe>`});
        responses.push({name: "Saaski", html: `<a href="http://bit.ly/2sKJauC" target="_blank">http://bit.ly/2sKJauC</a>`});
        responses.push({name: "TheMightyLorax", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0M3zAotcZ5o" frameborder="0" allowfullscreen></iframe>`});
        responses.push({name: "Feffers and Karr", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/v6cFXQlH3Ms" frameborder="0" allowfullscreen></iframe>`});
        responses.push({name: "goon", html: `<img src="thankyoufiles/goon.jpg" style="width:800px" />`});
        responses.push({name: "Mika", html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vOb1IWLk9ug" frameborder="0" allowfullscreen></iframe>`});
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }

            return array;
        }
        responses = shuffle(responses);
        res.render('pages/danger', {responses: responses, ended: typeof request.cookies.GO_FOR_THE_GOOD_ENDING != "undefined", isNewGameAlready: typeof request.cookies.ITS_CLYDE_TIME != "undefined"});
    });

    app.get('/PMOSH.rar', function(request, response) {
        var filePath = "";
        var fs = require("fs");
        if(request.cookies.ITS_CLYDE_TIME) {
            filePath = "public/clyde.mp3";
        }
        else if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            filePath = "public/true.mp3";
        }
        else {
            filePath = "public/laura.mp3";
        }
        fs.readFile(filePath, function(err, data) {
            if(err) throw err;
            response.send(data);
        })
    });

    app.get("/404", function(req, res) {
        var gavinFacts = [
            "The Jeffcoat name came from Sir Gweyneldor Useyourskinascoat, who used his first opponent, Jeff, as a skin. Rumor has it it was very loose and fluffy.",
            "Gavin once calculated the likelihood of a couch being haunted simply off the top of his head!...The likelihood was zero.",
            "Gavin uses the phrase 'LOL' like most people use oxygen. That's not hyperbole, he literally breathes acronyms. Please stand five feet away when he ROTFL.",
            "Could Gavin draw a penis so big that it WOULDN'T make him laugh? Yes. The last time he did, it came to life and attached to his pelvis.",
            "'Gavin' is Latin for 'hot dog'!",
            "One of the Gavins is an excellent lawyer! He got a \"Public Lewdness with an Unlicensed Badger\" charge reduced to \"Public Fursona But It's Totally Cool You Guys\".",
            "A multitude of Gavins owned hammer factories!....Wait, I don't.........awwww.",
            "There was no headway made in the Jeffcoat Murder Case, although A Woke AF Skull had no alibi.",
            "Chuck Norris is terrified of Gavin. It's not that Gavin is a bad ass, but more that Gavin doesn't suck and Chuck Norris sucks.",
            "This one time, at Gavin camp, I stuck an MD5 hash up my pussy.",
            "Gavin was based on Danger's cousin, who was also named Amy.",
            "Do NOT look up Gavin the Mongoose. It's...disappointing."
        ];
        res.status(404);
        var item = gavinFacts[Math.floor(Math.random()*gavinFacts.length)];
        res.render("pages/404", {fact: item});
    });
}