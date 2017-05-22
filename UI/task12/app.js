const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db.js').users;
const Articles = require('./db.js').articles;
const ArticlesBin = require('./db.js').articlesBin;
const session = require('express-session');
const SessionStore = require('connect-mongo')(session);

const store = new SessionStore({url: 'mongodb://localhost/dasha'});
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('index.html');
});

app.get('/articles', (req, res) => {
    Articles.find((error, articles) => !error ? res.json(articles) : res.sendStatus(500));
});

app.get('/article/:id', (req, res) => {
    Articles.findById(req.params.id, (err, data) => !err ? res.json(data) : res.sendStatus(500));
});

app.post('/articles', (req, res) => {
    new Articles(req.body).save(err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.put('/article/:id', (req, res) => {
    Articles.findByIdAndUpdate(req.params.id, {$set: req.body}, err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.post('/articleBin', (req, res) => {
    const article = req.body;
    article._id = article.id;
    delete article.id;
    new ArticlesBin(article).save(err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.delete('/article/:id', (req, res) => {
    Articles.findByIdAndRemove(req.params.id, err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => {
    const error = user ? null : new Error('deserialize');
    done(error, user)
});

passport.use('login', new LocalStrategy({passReqToCallback: true},
    (req, username, password, done) => {
        Users.findOne({username}, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                console.log(`User Not Found with username ${username}`);
                return done(null, false);
            }
            if (password !== user.password) {
                console.log('Invalid Password');
                return done(null, false);
            }
            return done(null, user);
        });
    })
);

app.post('/login', passport.authenticate('login'), (req, res) => res.send(req.user.username));

app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/username', (req, res) => req.user ? res.send(req.user.username) : res.sendStatus(401));

app.listen(7000, () => {
    console.log('Example app listening on port 7000!');
});
