//since we don't have a database we'll use our front end models at the moment

var express = require('express');
var filmRouter = new express.Router();

var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmRouter.get('/api/films/:id', function(req, res){
  res.json({data: films[req.params.id]});
})

filmrouter.get('/api/films', function(req, res) {
  res.json(films);
});

filmRouter.post('/api/films', function(req, res){
  // films.push(req.body.film);
  new Film(req.body.film);
  res.json({data: films});
});

filmRouter.put('/api/films/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

filmRouter.delete('/api/films/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: cats});
});

module.exports = filmRouter;
