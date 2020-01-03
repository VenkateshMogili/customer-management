var mysql = require('mysql');

var con = mysql.createConnection({
  user: "root",
  password: "root",
  database: "xelp_intranet"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.on('error', function(err) {
    console.log("[mysql error]",err);
  });

module.exports = con;