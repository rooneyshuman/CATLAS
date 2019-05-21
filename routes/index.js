var express = require('express');
var router = express.Router();

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
  res.render('map', { title: 'CATLAS' });
});

/* GET form page. */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'CATLAS' });
});


module.exports = router;
