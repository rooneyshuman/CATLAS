var express = require('express');
var router = express.Router();
var catList = require('../model');

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

/* GET/POST for DB. */
router.get('/cats', function(req, res) {

  // Get cats from database
  catList.find(function(err, cats) {
      if (err)
          res.send(err)

      res.json(cats); // return cats in JSON format
  });
});

// Add new cat and send back updated cat list
router.post('/cats', function(req, res) {

  // Create a new cat
  catList.create({
      text : req.body.text,
      done : false
  }, function(err, todo) {
      if (err)
          res.send(err);

      // Get all cats from database (including just added)
      catList.find(function(err, cats) {
          if (err)
              res.send(err)
          res.json(cats);
      });
  });
});

module.exports = router;
