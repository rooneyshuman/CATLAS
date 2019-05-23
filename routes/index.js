var express = require('express');
var router = express.Router();
var catList = require('../models/model');
var api_key = require('../config').api_key;
var cat_breeds = require('../public/assets/cat_breeds');
var moment = require('moment');

/* GET home page */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CATLAS' });
});

/* GET about page */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'CATLAS' });
});

/* GET map page */
router.get('/map', function (req, res, next) {
  // Get cats from database
  catList.find(function (err, cats) {
    if (err)
      res.send(err)

    res.render('map', { title: 'CATLAS', key: api_key, cats: cats });
  });
});

/* GET form page */
router.get('/form', function (req, res, next) {
  res.render('form', { title: 'CATLAS' });
});

/* GET cat breeds from JSON - used by form page*/
router.get('/cat_breeds.json', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(cat_breeds));
})

/* POST to database */
router.post('/add', function (req, res) {
  // Create a new cat
  catList.create({
    color: req.body.color,
    dateFound: moment(req.body.dateFound).format('DD/MM/YYYY'),
    location: {
      long: req.body.long,
      lat: req.body.lat
    },
    breed: req.body.breed,
    size: req.body.size,
    done: false
  }, function (err, cat) {
    if (err)
      res.send(err);
  });
  res.render('thanks', { title: 'CATLAS' });
});

module.exports = router;
