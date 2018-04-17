var express = require('express');
var router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res){
  res.json({data: "What, what, what? Hello."});

router.get('/about', function(req, res){
  res.json({data: "Some cutesy chit chat goes here..."});
})

module.exports = router;
