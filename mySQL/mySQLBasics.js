//Connect to a local database called "database_name", with validation
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "database_name"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

//--------------------------------------------//

//C - Create
//Insert a new entry into database_name
connection.query("INSERT INTO database_name SET ?", {
      var1: value1,
      var2: value2,
      var3: value3
}, function(err, res) {
    console.log("Your item was created successfully!");
});

//R - Read
//Show everything in database_name
connection.query("SELECT * FROM database_name", function(err, res) {
	console.log(res);
});

//U - Update
//Change var1 and var2 of row with id of target_id to new_value1 and new_value2
connection.query("UPDATE database_name SET ? WHERE ?", [{
    var1: new_value1,
    var2: new_value2
  }, {
    id: target_id
  }], function(err, res) {
  	console.log("Success!")
  }
}]);

//D - Delete
//Delete an entry from database_name where var1 = "matching value" 
connection.query("DELETE FROM database_name WHERE ?", {
  var1: "matching value"
}, function(err, res) {});