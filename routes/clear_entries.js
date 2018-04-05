var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bdb9251984c9eb",
  password: "bd5bed02",
  database: 'heroku_877da820785f190'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
var del = "DELETE FROM posts";

var query = con.query(del, function(err, result) {
});

console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

con.end();
});

