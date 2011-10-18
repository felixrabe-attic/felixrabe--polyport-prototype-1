
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'If only you knew' }));
    app.use(require('stylus').middleware({ src: __dirname + '/public' }));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function() {
    app.use(express.errorHandler()); 
});


// Middleware

function userSession(req, res, next) {
    if (req.session.email) {
        next();
    } else {
        res.render('login');
    }
}

// Routes

app.post('/', function(req, res, next) {  // The login page form POSTs here
    req.session.email = req.body.email;
    res.redirect('/');
});

app.get('/', userSession, function(req, res) {
    res.render('index', {
        email: req.session.email
    });
});

app.get('/logout', function(req, res) {
    if (req.session.email) {
        delete(req.session.email);
    }
    res.redirect('/');
});

app.all('/package/*', function(req, res) {
    res.render('unimplemented');
});

app.all('/route/*', function(req, res) {
    res.render('unimplemented');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
