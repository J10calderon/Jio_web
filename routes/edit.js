/*SQL THINGS HERE*/
var bodyParser = require('body-parser');
var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var app = express();
app.set('view engine', 'jade');
var db = require('../db');
var con = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bdb9251984c9eb",
  password: "bd5bed02",
  database: 'heroku_877da820785f190'
});

router.get('/', function(req, res, next) {
  res.render('edit', { flash: req.flash() } ); //renders the correspondign jade. 
});

router.post('/', function(req, res, next) {
var sqlpost = 'INSERT INTO posts (title, body, user) VALUES ("'+ req.body.title + '", "'+ req.body.body +'", "' +req.body.user+'")';
if (req.session.authenticated){
var query = con.query(sqlpost, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});
console.log(query.sql); 
res.redirect('/blog');
} else {
		req.flash('not_authorized', 'Not authorized to do that.');
		res.redirect('/edit');
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
res.redirect('/blog');
} else {
		req.flash('not_authorized', 'Not authorized to do that.');
		res.redirect('/edit');
}
});


module.exports = router;