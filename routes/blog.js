/*SQL THINGS HERE*/
var bodyParser = require('body-parser');
var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var app = express();
app.set('view engine', 'jade');
var db = require('../db');
// var con = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "bdb9251984c9eb",
//   password: "bd5bed02",
//   database: 'heroku_877da820785f190'
// });

router.get('/', function(req, res) {
var postList = [];
	var queryString = 'SELECT title,body,user FROM posts LIMIT 100';
  db.getConnection((err, connection) => {
    if (err) throw err;
	connection.query(queryString, function(err, rows, fields){
	    if (err) {
	    	res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	    } else {
	    	for (var i = 0; i < rows.length; i++) {
			  		var post = {
			  			'title':rows[i].title,
			  			'body':rows[i].body,
			  			'user':rows[i].user
			  		};
			  		postList.push(post);
	    }
		  	res.render('blog', {postList: postList, flash: req.flash() });
		}
	});

});
});

router.post('/', function (req, res, next) {
	console.log(req.body);
if (req.session.authenticated){
		res.redirect('/edit');
	} else {
		req.flash('not_logged_in', 'Cannot visit edit fields. Not logged in.');
		res.redirect('/blog');

	}
});

module.exports = router;
