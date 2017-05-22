const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost/dasha');

db.on('error', err => console.log('connection error to DB.', err.message));
db.once('open', callback => console.log('connected to DB'));

const articles = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    summary: String,
    image: String,
    createdAt: Date,
    tags: [String]
});

const articlesBin = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    summary: String,
    image: String,
    createdAt: Date,
    tags: [String]
});

const users = new mongoose.Schema({
    username: String,
    password: String
});

module.exports.articles = db.model('Articles', articles);
module.exports.articlesBin = db.model('articlesbin', articlesBin);
module.exports.users = db.model('Users', users);