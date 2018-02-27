var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about'); //renders the correspondign jade. 
});

module.exports = router;
