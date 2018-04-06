var mysql = require('mysql');
var db = require('../db');

db.getConnection(function(err, connection){
    if (err) throw err;
  	console.log("Connected!");
var sqlpost = "INSERT INTO posts (title, body, user) VALUES ('WOW I made it pretty', 'this is a body. it may not be what you are used to but it is optimal', 'jio')";
var query = connection.query(sqlpost, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});
console.log(query.sql);
});

