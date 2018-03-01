var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login'); //renders the correspondign jade. 
});



module.exports = router;
