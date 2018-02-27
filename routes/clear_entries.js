var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
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

