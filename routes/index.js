var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page/dashboard/index', { title: 'Dashboard' });
});


module.exports = router;
