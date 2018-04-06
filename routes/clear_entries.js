var mysql = require('mysql');
var db = require('../db');

db.getConnection(function(err, connection){
    if (err) throw err;
    console.log("Connected!");
var del = "DELETE FROM posts";
var query = connection.query(del, function(err, result) {
	});
console.log(query.sql); 
});

