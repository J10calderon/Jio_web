// var mysql = require('mysql');
// //mysql://bdb9251984c9eb:bd5bed02@us-cdbr-iron-east-05.cleardb.net/heroku_877da820785f190?reconnect=true
// var con = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "bdb9251984c9eb",
//   password: "bd5bed02",
//   database: 'heroku_877da820785f190'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// //   con.query("CREATE DATABASE websitedb", function (err, result) {
// //     if (err) throw err;
// //     console.log("Database created");
// //   });
// });

var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10,

  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bdb9251984c9eb",
  password: "bd5bed02",
  database: 'heroku_877da820785f190'
});

module.exports = pool;