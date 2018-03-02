/*SQL THINGS HERE*/
var bodyParser = require('body-parser')
var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var app = express();
app.set('view engine', 'jade');
var db = require('../db')
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
});

router.get('/', function(req, res) {
var postList = [];
	var queryString = 'SELECT title,body,user FROM posts LIMIT 100';
	con.query(queryString, function(err, rows, fields){
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





// if (req.session.authenticated){

// } else {
// 	throw err;
// }
//Add a post in the blog.
router.post('/', function(req, res, next) {
var sqlpost = 'INSERT INTO posts (title, body, user) VALUES ("'+ req.body.title + '", "'+ req.body.body +'", "' +req.body.user+'")';
if (req.session.authenticated){
var query = con.query(sqlpost, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});
console.log(query.sql); 
res.redirect('/blog')
} else {
		req.flash('not_authorized', 'Not authorized to do that.');
		res.redirect('/blog');
}
});


//Delete all posts
router.post('/delete', function(req, res, next) {
var del = "DELETE FROM posts";
if (req.session.authenticated){
var query = con.query(del, function(err, result) {
    if (err) throw err;
    console.log("POSTS DELETED");
});
console.log(query.sql); 
res.redirect('/blog')
} else {
		req.flash('not_authorized', 'Not authorized to do that.');
		res.redirect('/blog');
}
});


module.exports = router;
