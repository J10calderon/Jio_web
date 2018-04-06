var mysql = require('mysql');
var db = require('../db');
// var con = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "bdb9251984c9eb",
//   password: "bd5bed02",
//   database: 'heroku_877da820785f190'
// });

  db.getConnection((err, connection) => {
    if (err) throw err;
  console.log("Connected!");

var sqlpost = "INSERT INTO posts (title, body, user) VALUES ('WOW I made it pretty', 'this is a body. it may not be what you are used to but it is optimal', 'jio')";
var query = connection.query(sqlpost, function(err, result) {
  // Neat!
    if (err) throw err;
    console.log("1 record inserted");
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
});

