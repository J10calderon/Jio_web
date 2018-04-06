var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10,

  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bdb9251984c9eb",
  password: "bd5bed02",
  database: 'heroku_877da820785f190'
});

module.exports = pool;