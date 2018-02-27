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

var sqlpost = "INSERT INTO posts (title, body, user) VALUES ('WOW I made it pretty', 'this is a body. it may not be what you are used to but it is optimal', 'jio')";
var query = con.query(sqlpost, function(err, result) {
  // Neat!
    if (err) throw err;
    console.log("1 record inserted");
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
con.end();
});
