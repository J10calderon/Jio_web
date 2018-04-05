'mysql'  => [
    'driver'    => 'mysql',
    'host'      => env('DB_HOST', 'us-cdbr-iron-east-05.cleardb.net'),
    'database'  => env('DB_DATABASE', 'heroku_877da820785f190'),
    'username'  => env('DB_USERNAME', 'bdb9251984c9eb'),
    'password'  => env('DB_PASSWORD', 'bd5bed02'),
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
    'strict'    => false,
],
mysql://bdb9251984c9eb:bd5bed02@us-cdbr-iron-east-05.cleardb.net/heroku_877da820785f190?reconnect=true