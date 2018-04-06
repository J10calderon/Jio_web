/*SQL THINGS HERE*/
var bodyParser = require('body-parser');
var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var app = express();
app.set('view engine', 'jade');
var db = require('../db');

router.get('/', function(req, res, next) {
  res.render('edit', { flash: req.flash() } ); //renders the correspondign jade. 
});

router.post('/', function(req, res, next) {
var sqlpost = 'INSERT INTO posts (title, body, user) VALUES ("'+ req.body.title + '", "'+ req.body.body +'", "' +req.body.user+'")';
if (req.session.authenticated){
  db.getConnection(function(err, connection){
    if (err) throw err;
    console.log("Connected!");
    var query = connection.query(sqlpost, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  console.log(query.sql);
  });

res.redirect('/blog');
} else {
    req.flash('not_authorized', 'Not authorized to do that.');
    res.redirect('/edit');
}
});


router.post('/delete', function(req, res, next) {
  var del = "DELETE FROM posts";
  if (req.session.authenticated){
    db.getConnection(function(err, connection){
      if (err) throw err;
      console.log("Connected!");
      var query = connection.query(del, function(err, result){
        if (err) throw err;
        console.log("POSTS DELETED");
      })
  console.log(query.sql); 
    })

res.redirect('/blog');
  } else {
    req.flash('not_authorized', 'Not authorized to do that.');
    res.redirect('/edit');
  }
})
  


module.exports = router;