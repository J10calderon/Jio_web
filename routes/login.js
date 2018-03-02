var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('login'); //renders the correspondign jade. 
  res.render('login', { flash: req.flash() } );
});


router.post('/', function (req, res, next) {
	console.log(req.body);
	// you might like to do a database look-up or something more scalable here
	if (req.body.username && req.body.username === 'jio' && req.body.password && req.body.password === 'burrdabest') {
		req.session.authenticated = true;

		// res.redirect('/secure');
		// res.send('login successful');
		req.flash('successful_login', 'This session is now authenticated.');
		res.redirect('/login');

	} else {
		req.flash('unsuccesful_login', 'Username and password are incorrect');
		res.redirect('/login');
		// res.send('login unsuccesful');
	}

});

router.get('/logout', function (req, res, next) {
	delete req.session.authenticated;
	res.redirect('/');
});

module.exports = router;
