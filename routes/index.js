var express = require('express');
var router = express.Router();
var api_key = require('../config')['api_key'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CATLAS' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'CATLAS' });
});

/* GET map page. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'CATLAS', key: api_key });
});

module.exports = router;
