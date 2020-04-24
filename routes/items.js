var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.render('page/items/list', { title: 'ItemList Page' });
});

router.get('/add', function(req, res, next) {
  res.render('page/items/add', { title: 'ItemAdd Page' });
});

module.exports = router;
