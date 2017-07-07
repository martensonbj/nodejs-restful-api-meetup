// import express from 'express';
var express = require('express');
var bodyParser = require('body-parser');
var monk = require('monk');

// const app = express();
// const port = 3000;

var app = express();
var port = 3000;
var db = monk('localhost/gameslocker');
var games = db.get('games');
// var store = [];

app.use(bodyParser.urlencoded({ encoded: false }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.json(store);
});

app.post('/api/games', function(req, res, next) {
  games.insert(req.body);
});

app.listen(port, function() {
  console.log(`app listening on port ${port}`);
});
